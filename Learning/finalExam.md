# Final Exam 
The Technical Evaluation seeks to isolate certain aspects of cultural qualities specific to the team as well as attempting to gauge technical ability. Candidates are evaluated on a sliding scale of questions spanning several categories. The goal is to identify the bounds of the candidate's knowledge as quickly as possible.

Technical Questions cover the following topics:

- Computer Architecture
- Networking
- Systems Engineering
- Operations

The general focus is to build an understanding of the candidate's knowledge of:

1. What is a computer?
2. How do computers talk?
3. How do computers orchestrate together to achieve a common goal?
4. How do we determine if the computers are achieving their common goal?

Not all of these topics are expected to be covered. In fact, the majority should not be covered, select based on the candidate's experience and team needs.

## Interview Format

### Introductions [5 min]

The goal of the introduction is to welcome the candidate and put them at ease. Explain what is going to be happening, introduce yourself and provide a welcoming format. Interviews are incredibly stressful, there is no need to stress someone out more.

- Welcome the candidate. Thank them for taking the time.
- Brief introductions.
- Explain the interview format

### Technical [30 min]

For this section, try to pull at least one from each section, but account for the candidate's experience. If the candidate is a deeply focused network engineer, maybe skip Computer Architecture. Don't expect everyone to get to Hard level questions in every section. Jump into the medium immediately and slide based on experience.

### Candidate Feedback and Questions [10 min]

This is a general section for you to gather candidate feedback and questions from the candidate. This is their opportunity to flip the script and challenge you the interviewer. Be inviting even if the candidate has clearly failed. We want even failing candidates to have as positive of an experience as possible.

## Technical

Technical questions are evaluated on a sliding scale. For each topic it is expected that you start with the set of easier questions and grow in difficulty as the interview progresses. The sliding scale is by topic and is graded as follows:

- [ ] Weak
- [ ] General
- [ ] Strong
- [ ] Advanced

The following is a list of questions you can select from, they are graded from easy to hard:

### Networking

#### Easy

1. What are the layers of the OSI Model?
2. What is the difference between TCP and UDP?
3. How many addresses are covered in a /24 subnet for IPv4?
4. What are some common network protocols and their function?
5. What is the difference between HTTP and HTTPS?

#### Medium

1. How does traceroute work?
2. How does TLS secure traffic? What are the steps to establishing a TLS connection?
3. What's the difference between routing and switching?
4. What layer of the OSI Model does MPLS fit?
5. What's the difference between an EGP and IGP?

#### Hard

1. How does BGP determine best paths? How can you manipulate it?
2. Explain how VxLAN works. What control planes does it use?
3. How does MTU discovery work, and how can it break?
4. How can you make a Layer 2 link redundant?
5. What is a CLOS Topology?

### Computer Architecture

#### Easy

1. What is a cache in a computer, what purpose does it serve?
2. What is RAID? Why is it used?
3. What is virtual memory? How does it differ from physical memory?

### Medium

1. What is cache coherence? How does MESI work?
2. Explain the steps to perform a swap, both in and out.
3. What is the difference between write update and write invalidate?

#### Hard

1. Explain how a 32 bit integer moves from swap into being usable in an instruction cycle
2. Explain how a 32 bit integer moves from a register into swap

### Systems Engineering

#### Easy

1. What is concurrency? How is it usually implemented?
2. What is a load balancer? Why do we use them?
3. Explain some common inter process communications protocols and their benefits and drawbacks.
4. What is caching? What value does it bring?
5. What is a distributed lock? Why do we need them?

#### Medium

1. What is the difference between LRU and LFU caching strategies? Why would we choose one over the other?
2. What is a dead lock? How can it occur?
3. What is distributed consensus? How is it relevant to the systems we build?
4. What are some of the downsides to distributed caching layers in system architecture? How can we surmount these challenges?
5. What is "hot sharding"? How do we address it?

#### Hard

1. Explain the difference between Star and Ring communication topologies. How would we migrate a Star topology to a Ring topology?
2. Explain the difference between Eventual Consistency and Strictly Linearizable Consistency. When would you select one or the other?
3. Explain how git works.

### Operations

#### Easy

1. How do you deal with emergencies, incidents, and outages?
2. What is a database migration?
3. What's the longest period of time you have been on-call? How do you like to proactively manage burnout?
4. What are the implications of hand rolled vs infrastructure as code? When should you use which?

#### Medium

1. What are the three pillars of observability? What role does each play?
2. What are some common secret management techniques?
3. What are the RED metrics?
4. What are SLOs, SLIs and SLAs? How do they relate to each other?

#### Hard

1. Explain some techniques for developing and monitoring high reliability systems.
2. How would you deal with an unreliable network infrastructure?
3. Explain some techniques for validating releases.
