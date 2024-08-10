---
title: 'Optimizing Image Loading for Better UX'
coverImageId: '/v1723278622/lizzi-sassman-x4PxDKdwNqA-unsplash_bsom4b.webp'
coverImageAttribute: 'Photo by [Lizzi Sassman](https://unsplash.com/@okaylizzi)'
excerpt: 'Learn how to optimize image loading for better user experience by implementing placeholders and serving correct sizes of images using Next.js and Cloudinary.'
date: '2024-08-10'
author:
  name: Henri Remonen
featured: false
ogImage:
  url: 'https://res.cloudinary.com/daty4gssm/image/upload/v1723278622/lizzi-sassman-x4PxDKdwNqA-unsplash_bsom4b.webp'
categories:
  - 'react'
  - 'personal'
keywords:
  - 'image optimization'
  - 'react image optimization'
  - 'next js image optimization'
  - 'cloudinary image optimization'
  - 'react cloudinary'
  - 'next js cloudinary'
  - 'react cloudinary srcset'
  - 'react image blur'
  - 'next image blur'
draft: false
---

Since [migrating](https://www.hremonen.com/blog/migrating-from-wordpress-to-nexjs) the blog from WordPress to Next.js I've been thinking about how to optimize the image loading experience further. I would like each post to have a cover image but I acknowledge loading multiple images simultaneously might affect the performance for certain users.

Some people might have slower internet connections and loading the images might take too long which might affect the user experience. Actually it's likely to affect the user experience as I do not have any "placeholder" or skeleton for the images. If the loading takes long, there is just an empty reserved space for the image - which is not that ideal, though it could be worse (no reserved space and huge layout shifts). Secondly, since I am using the free version of Cloudinary, compressing and using only the correct size images will be a more long-lasting solution as I will be able to serve larger volumes of traffic in the future while using the free tier.

Taking these into consideration I've taken some new approaches to my publishing workflow to minimize the problems of large images:

- I am lazy loading every image
- I compress the images to approx 75% quality using [Squoosh.app](https://squoosh.app/) and also change the format to WebP. Mostly the images I serve are still readable and fine but I will see if I need to adjust the quality.
- Only serve specific sizes of the images on blog posts and covers. For covers I am fetching a 1024px wide image from Cloudinary and for post content I try to fetch a 560px wide image if the image is somewhat equally wide and tall. For more narrow horizontal images I try to fetch 150px tall images, if any of this makes any sense...

This is a somewhat okay-ish solution, but I know I could do better for sure.

## What Can Be Optimized

After doing some research I found the following solutions for a better image-loading experience:

- Giving a placeholder while the image is loading - preferably a blur of the image if possible or even a solid color.
- Serving correct sizes of images depending on the device width the user is using AKA using [srcsets](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset) and [sizes](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes) properties.

Placeholder is more of a user experience type of beat, it does not affect the overall performance of the application. However, it still contributes to the overall feel of the site and lives up to a certain level of professionalism.

Image loading performance comes down to a really simple fact _**how fast can the image be loaded?**_. Well, it would be fantastic if everyone had fast internet access and I could serve 8096x8096 images exclusively - not going to happen. Even if it was true that bandwidth wasn't an issue, it would still be extremely stupid to do so. Anyway, the key to making the image load as fast as possible is:

- [x] Serve compressed images
- [ ] Serve appropriate size of the image depending on the device viewport width -> smaller image size

Turns out I'm already implementing one of the two checkpoints. Yay!

### Providing Placeholder on Image Load

The Next.js Image component offers a [placeholder](https://nextjs.org/docs/pages/api-reference/components/image#placeholder) value which is used while the image is loading. The possible values are `blur`, `empty`, or `data:image/` (base64 encoded DATA URL). For our use case, the `blur` option is perfect. But there is one problem with that; we are dynamically fetching the images from Cloudinary rather than hosting static content on Vercel.

Meaning, that if they want to use the `placeholder` of the Next.js Image component we have to provide a [blurDataURL](https://nextjs.org/docs/pages/api-reference/components/image#blurdataurl). Turns out, that this is not a biggie after all. Cloudinary allows us to apply different [transformations](https://cloudinary.com/documentation/image_transformations) such as sizes, qualities, formats, etc. on the hosted images. After carefully reading through the [Next.js documentation](https://nextjs.org/docs/pages/api-reference/components/image#blurdataurl), we can conclude that we want to build our Cloudinary URLs somewhat in the following way:

```plaintext /w_10,q_auto,f_auto/#purple
https://res.cloudinary.com/<cloudinaryCloudId>/image/upload/w_10,q_auto,f_auto/<imageUrl>
```

This dynamic Cloudinary URL fetches the image with `imageUrl` from our Cloudinary cloud and tells Cloudinary to transform it to 10 pixels width with the quality and format set to automatic values.

After the transformed image is fetched we have to encode it in [Base64 encoding](https://en.wikipedia.org/wiki/Base64) and pass the base64 string to the `blurDataUrl` attribute of the Next.js Image component. After that, we should have an enlarged and blurred placeholder image for the loading duration - and since it's super small it should have no performance drawbacks for the users.

### Loading Correct Sizes of Images

Serving responsive images can be done through the HTML `srcset` and `sizes` attributes on any `<img>` element. The `srcset` attribute is a string of comma-separated values of which each entry contains the image's filename and the image's [intrinsic size](https://developer.mozilla.org/en-US/docs/Glossary/Intrinsic_Size). The following example taken from [MDN docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#resolution_switching_different_sizes) shows how these properties are used:

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy"
/>
```

And to cite the MDN docs of how this will benefit our users:

> At this point, if a supporting browser with a viewport width of 480px loads the page, the (max-width: 600px) media condition will be true, and so the browser chooses the 480px slot. The elva-fairy-480w.jpg will be loaded, as its inherent width (480w) is closest to the slot size. The 800px picture is 128KB on disk, whereas the 480px version is only 63KB — a saving of 65KB.
>
> -- <cite>MDN Web Docs</cite>

To translate the same logic into our application, we can use one of Next.js's built-in features. Next.js exposes the possibility of providing a [loader function](https://nextjs.org/docs/app/building-your-application/optimizing/images#loaders) to the Image component. The loader function will generate the `srcset` properties under the hood! In order for this to work, our function must return a URL for the image, given `src`, `width`, and `quality` parameters as in the example:

```jsx
const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
```

The beauty of this approach is that we can actually add transformations dynamically to fetch the correct image sizes. Later on, we will modify the `imageLoader` to fetch the images from Cloudinary.

Now that we have figured out what can be optimized I guess it's time for some _tykitys_!

## Implementing Blurred Placeholder Image

Let's start the implementation from the placeholder on the image load. I outlined that we can use the Next.js Image component's `placeholder=blur` with the `blurDataURL` property which will have to be a _base64_ encoded data URL string.

For this, we will implement a function that takes the imageID (basically the Cloudinary image's PUBLIC ID) of the image as an argument and then fetches the image from our Cloudinary cloud with the transformations of `w_10,q_auto,f_auto`:

```js
async function getBase64DataURL(imageURL: string) {
  const res = await fetch(imageURL)
	const arrayBuffer = await res.arrayBuffer()

	const base64 = Buffer.from(arrayBuffer).toString('base64')
	const mime = res.headers.get('Content-Type') ?? 'image/webp'

	return `data:${mime};base64,${base64}`
}

async function getBlurDataURL(imageId: string) {
  const transformations = ['f_auto', 'c_limit', 'w_10', 'q_auto']
  const cloudinaryURL = `https://res.cloudinary.com/daty4gssm/image/upload/${transformations.join(',')}${imageId}`

  const base64DataURL = await getBase64DataURL(cloudinaryURL)
  return base64DataURL
}
```

We can then go ahead and use the `getBlurDataURL` on our components to get the encoded base64 URL string. I went ahead and created a wrapper component that encapsulates this logic inside it:

```jsx
interface BlurrableImageProps {
  coverImageId: string
  alt: string
  width: number
  height: number
  sizes?: string
  className: string
}

const BlurrableImage = ({coverImageId, alt, width, height, sizes, className}: BlurrableImageProps) => {
  const base64DataURL = use(getBlurDataURL(coverImageId))

  return (
    <Image
      src={coverImageId}
      alt={alt}
      placeholder='blur'
      blurDataURL={base64DataURL}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
    />
  )
}
```

Since `getBlurDataURL` returns a promise, it must be awaited before being used. Essentially, `BlurrableImage` serves as a [HOC](https://legacy.reactjs.org/docs/higher-order-components.html) for the Next.js Image component. Voilá! We now have a performant blurred version of the image during loading.

![Loading image is blurred to the user instead of blank space.](https://res.cloudinary.com/daty4gssm/image/upload/v1723193330/blurrable-image-loading_fmt1e9.webp)

## Implementing the Loader Functionality

We briefly discussed how the Next.js image loaders can be used for the automatic `srcset` generation. Since we are using Cloudinary we can implement a function that returns the image URL with the transformations:

```jsx
function cloudinaryLoader({ src, width, quality }) {
  const transformations = [
    'f_auto',
    'c_limit',
    `w_${width}`,
    `q_${quality || 'auto'}`,
  ]
  return `https://res.cloudinary.com/daty4gssm/image/upload/${transformations.join(',')}${src}`
}
```

In the loader function, we are providing our Cloudinary cloud address and defining a set of transformations we want. The way Next.js handles the loader functionality is so that each cover image translates to somewhat similar to the following HTML:

```html
<img
  alt=""
  loading="lazy"
  width="1024"
  height="780"
  decoding="async"
  class="aspect-[3/4] max-h-96 rounded-2xl object-cover sm:aspect-auto sm:max-h-[780px]"
  style="color:transparent"
  sizes="(max-width:1023px) 80vw, (min-width:1024px) and (max-width:1620px) 67vw, 1100px"
  srcset="
    https://res.cloudinary.com/daty4gssm/image/upload/f_auto,c_limit,w_640,q_auto/v1721991849/photo-1718066236090-4fc9ffd545e6_ykojmz_k4pedf.webp   640w,
    https://res.cloudinary.com/daty4gssm/image/upload/f_auto,c_limit,w_750,q_auto/v1721991849/photo-1718066236090-4fc9ffd545e6_ykojmz_k4pedf.webp   750w,
    https://res.cloudinary.com/daty4gssm/image/upload/f_auto,c_limit,w_828,q_auto/v1721991849/photo-1718066236090-4fc9ffd545e6_ykojmz_k4pedf.webp   828w,
    https://res.cloudinary.com/daty4gssm/image/upload/f_auto,c_limit,w_1080,q_auto/v1721991849/photo-1718066236090-4fc9ffd545e6_ykojmz_k4pedf.webp 1080w,
    https://res.cloudinary.com/daty4gssm/image/upload/f_auto,c_limit,w_1200,q_auto/v1721991849/photo-1718066236090-4fc9ffd545e6_ykojmz_k4pedf.webp 1200w,
    https://res.cloudinary.com/daty4gssm/image/upload/f_auto,c_limit,w_1920,q_auto/v1721991849/photo-1718066236090-4fc9ffd545e6_ykojmz_k4pedf.webp 1920w,
    https://res.cloudinary.com/daty4gssm/image/upload/f_auto,c_limit,w_2048,q_auto/v1721991849/photo-1718066236090-4fc9ffd545e6_ykojmz_k4pedf.webp 2048w,
    https://res.cloudinary.com/daty4gssm/image/upload/f_auto,c_limit,w_3840,q_auto/v1721991849/photo-1718066236090-4fc9ffd545e6_ykojmz_k4pedf.webp 3840w
  "
  src="https://res.cloudinary.com/daty4gssm/image/upload/f_auto,c_limit,w_3840,q_auto/v1721991849/photo-1718066236090-4fc9ffd545e6_ykojmz_k4pedf.webp"
/>
```

We can see that Next.js has gone ahead and generated the `srcset` properties. The loader function will not produce an automatic `sizes` property, but I think that it's easy to fill in manually if needed.

The downside of this approach is that we must remember to explicitly use the loader on our Next.js Image elements:

```jsx {3}
<Image
  src={coverImageId}
  loader={cloudinaryLoader}
  alt=''
  width={1024}
  height={780}
  sizes='(max-width:1023px) 80vw, (min-width:1024px) and (max-width:1620px) 67vw, 1100px'
  className='aspect-[3/4] max-h-96 rounded-2xl object-cover sm:aspect-auto sm:max-h-[780px]'
/>
```

We could have also gone ahead and defined a global [loaderFile](https://nextjs.org/docs/app/api-reference/components/image#loaderfile) to be used in all of the Next.js Image elements by default in `next.config.js`, but since we are using Component framework (React) I think we can manage to define the loader in the few components we are using these images.

Since we have already created the `BlurrableImage` HoC, we can just append this logic into it to save us some copy-pasting.

```jsx {14}
const BlurrableImage = ({
  coverImageId,
  alt,
  width,
  height,
  sizes,
  className,
}: BlurrableImageProps) => {
  const base64DataURL = use(getBlurDataURL(coverImageId))

  return (
    <Image
      src={coverImageId}
      loader={cloudinaryLoader}
      alt={alt}
      placeholder='blur'
      blurDataURL={base64DataURL}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
    />
  )
}
```

## Conclusion

We checked what could be done to optimize the image-loading experience for the users. Image loading duration is dependent on two factors: The available network bandwidth and the size of the image. To achieve a good user experience the following points must be true:

- Lazy load images -> UX, bandwidth
- Provide some kind of placeholder for the images' loading duration -> UX
- Serve only compressed images -> smaller image size
- Serve appropriate size of image depending on the device viewport width -> smaller image size

Next, we implemented a blurred placeholder image for the loading duration using the Next.js Image component's `placeholder=blur` and `blurDataURL` properties. By fetching a transformed image with a small width from Cloudinary and encoding it in Base64, we were able to display a visually appealing placeholder while the actual image loads.

To further optimize image loading, we implemented a loader function using Cloudinary's transformations. This function generates the image URL with the desired transformations based on the provided `src`, `width`, and `quality` parameters. By using this loader function in conjunction with the Next.js Image component, we were able to automatically generate `srcset` properties for different image sizes.
