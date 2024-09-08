---
title: 'DBaaS vs. Self-hosted Database Solutions'
date: '2024-09-09'
coverImageId: '/v1725812211/growtika-f7uCQxhucw4-unsplash_dhk126.webp'
coverImageAttribute: 'Photo by [Growtika](https://unsplash.com/@growtika)'
excerpt: 'When building stateful applications on Kubernetes, a key decision is whether to use Database as a Service (DBaaS) or manage the database yourself. This article explores the pros and cons of both approaches, including aspects like cost, control, scalability, and vendor lock-in, to help you make an informed decision based on your organization´s needs.'
author:
  name: Henri Remonen
featured: false
ogImage:
  url: '/v1725812211/growtika-f7uCQxhucw4-unsplash_dhk126.webp'
categories:
  - 'devops'
  - 'kubernetes'
keywords:
  - 'kubernetes'
  - 'dbaas vs self-hosted'
  - 'dbaas benefits'
  - 'dbaas disadvantages'
  - 'database as a service'
  - 'what is database as a service'
  - 'cloud vendor dbaas'
  - 'private dbaas'
  - 'kubernetes database hosting'
  - 'self-hosted database kubernetes'
  - 'benefits of self-hosted database'
  - 'dbaas cost'
  - 'Kubernetes stateful applications'
  - 'Database as a Service (DBaaS)'
  - 'Self-hosted database Kubernetes'
  - 'Managed database solutions'
  - 'DIY database management'
  - 'Cloud database providers'
  - 'Kubernetes database performance'
  - 'Data integrity Kubernetes'
  - 'Scalability in databases'
  - 'Vendor lock-in DBaaS'
  - 'Kubernetes cluster database'
  - 'Persistent volume Kubernetes'
  - 'Database security best practices'
  - 'Cost-effective database solutions'
  - 'Kubernetes database operators'
---

When building stateful applications on Kubernetes, at some point the following decision has to be made: to use Database as a Service or to 'Do it yourself'. The DIY method includes running the database, such as PostgreSQL, in a pod (container) and handling the data integrity yourself.

Here, I will investigate the pros and cons of both methods and let you decide what you want to do. There seems to at least _have_ been an ideology that it would not be wise to run databases on the Kubernetes cluster because of its stateless design, or as others would say, it's made for Cattle and it happens to be that a database is a Pet.

> **A Cattle** is an array of more than two servers, which are designed for failure. Not a single server is irreplaceable. During failure, human intervention is not needed as the failed servers should restart automatically or another server takes its place.
>
> **A Pet**, on the other hand, is a server or server pairs that can never fail, e.g., their uptime is important. Pets are manually managed and they can't survive without proper care and management.

Kubernetes is all about treating resources as disposable. If a pod is not healthy, it gets killed; if it uses too much memory, it gets killed; if it uses too much CPU, it gets throttled, etc.

This sounds like something we really would not like to happen to our database, which holds business-critical data. But I don't think it's actually this black and white—at least not anymore.

## Benefits of DBaaS Solutions

Database as a Service (DBaaS) is a database solution offered by some third-party vendor, usually some cloud provider (such as AWS, Azure, and Google Cloud). The idea behind a managed DB solution is that the vendor is offering the hardware and a solution to run a managed database on your behalf. The vendor takes care of the uptime, security, maintenance, and backups, leaving none of the hassle for the purchaser of the service.

Also, it makes scalability of the databases easy—give more money, get more storage, and computing capacity. The scalability is one reason why it might be a good choice for smaller teams, start-ups, or just to get a quick proof-of-concept running. However, for larger organizations, this might come with a hefty price tag, which is why they might want to reconsider another option.

Some organizations might also be subject to regulations, which can limit the options for using DBaaS solutions. While it's true there are also some private solutions, I think the overhead of setting one up is similar to running your own database container. But this post isn't about comparing the private DBaaS solutions and running your own pods.

If you opt for a DBaaS solution, you also are going to drive towards vendor locking yourself to that specific cloud vendor—affecting the ease of migration to another vendor at a later point. Although sticking with the same vendor also gives cost benefits as you get volume discounts.

## Benefits of Self-Hosted Database

> Managed database solutions are awfully expensive

Contrary to cloud vendors providing the database, you could run it yourself on the Kubernetes cluster, on its own Kubernetes cluster, or heck, even on a [VM](https://www.redhat.com/en/topics/virtualization/what-is-a-virtual-machine). The idea behind self-hosting a database is that you have full control of the version, how you're going to back up the data, how and where it's running, and you are not dependent on any third-party vendor.

A self-hosted database should provide better performance and lower latency, at least in theory, because you are skipping a trip to the cloud vendor's location and back each time. The most prominent benefit would be the cost compared to the managed solution. Though, it does not come easy; you will have to have more skilled employees to pull this off. You have to be able to update the database, care for its security, scale it as needed, create and store backups, etc.—all the things that would be managed by the third-party cloud vendor are now on you. There are open-source database operators available, such as [Zalando's](https://github.com/zalando/postgres-operator) or [CloudNativePG](https://cloudnative-pg.io/), which might make some of the things easier, but still require skills and time to manage.

Hosting a database solution on Kubernetes requires a volume mount to a shared persistent volume, which does not die between deployments. Using a stateful set, we can guarantee that there is always one identical pod of the resource, which should take care of data loss between deployments. There are also times when your database service might have downtime, such as the pod crashing and taking time to reboot, or version updates to the database or cluster.

## Conclusion

There certainly are benefits to both solutions—and I can't give a preemptive answer. It certainly depends also on the organization's goals, merits, and customs. For a larger organization where you have the manpower, you might opt for a self-hosted solution. On the contrary, smaller teams might benefit from the ease of use of DBaaS solutions which also offer peace of mind that the valuable business data is safely stored and maintained.

Investigating this topic indicated that many organizations are self-hosting non-critical applications' databases and even other environments than production. For production environments, the organizations are using managed solutions for the reasons laid out earlier. There are large organizations that have gone through with self-hosted solutions on their own, such as Zalando for example. They are offering their PostgreSQL Kubernetes operator as open source which streamlines some of the overhead of setting up a self-hosted solution, but still requires knowledge of Kubernetes and database systems.
