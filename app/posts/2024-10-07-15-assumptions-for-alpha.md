---
title: Assumptions for Alpha
description: How we identified and prioritised assumptions
date: 2024-10-07
---

As mentioned in the [Introduction section](#), during the initial Discovery period, we identified assumptions around the scheme, and prioritised these into our riskiest assumptions to focus our exploration and testing during the Alpha phase.

We did this by:

## 1\. Reviewing relevant documents

We individually reviewed the call for evidence analysis, consultation analysis, Pre-Discovery deck, and other background documents, to act as bases for our assumptions.

## 2\. Generating assumptions

We ran a collaborative session where we documented some possible assumptions under some provisional categories. These categories were:

* assumptions about the users
* assumptions about the scheme benefits
* assumptions about specific aspects of the scheme
* regulatory assumptions
* technical assumptions
* service ownership assumptions
* financial assumptions


## 3\. Mapping these assumptions, to identify the riskiest ones

We did this in another collaborative session, where we positioned each assumption on a grid with 2 axes:

* how **‘known’** the assumption was (i.e. what evidence did we already have for this assumption \- the more evidence we already held, the less risky the assumption was, and therefore the less need to test)
* how **important** the assumption was to the success of the service (i.e. if proven wrong/false, how likely it was to cause the service to fail \- the more important we felt the assumption was to the service’s success, the more risky it was, and therefore the more need to test)

The assumptions in the “least known \+ most important” quadrant of the map were our riskiest assumptions.
Once we had  mapped them (we used a ‘mob’ approach), we de-duplicated any similar assumptions, reviewed their positions, discussed any we were in disagreement on, and moved them to a different quadrant if appropriate. We then listed the assumptions out in order of their position within the “riskiest” quadrant, resulting in a list of 25 riskiest assumptions, from the most risky down to the least risky.

## 4a. Writing hypotheses for the risky assumptions

We wrote a hypothesis for each risky assumption to outline what we thought would happen as a result of this assumption, so that we could use this as a basis for our testing approaches.

For example:

- **Assumption 3:** “We assume that operators won't register their properties unless there's a compelling reason to do so”
- **Hypothesis:** “Therefore we hypothesise that if we give them a registration 'badge' or tell them the benefits of the registration scheme, this will encourage them to register for the scheme”.

This started as a whole-team exercise, but it quickly became apparent that it was trickier and more time-consuming than we had expected, so we pivoted to have a smaller number of the team focusing on this exercise in further separate sessions, to enable us to complete the exercise more quickly.

## 4b. Writing testing approaches for the risky assumptions / hypotheses

Once we had hypotheses for our risky assumptions, we were able to formulate a testing approach for each assumption and hypothesis, to define how we would test them in Alpha.

Using the same example as before, this worked as follows:

- **Assumption 3:** “We assume that operators won't register their properties unless there's a compelling reason to do so”
- **Hypothesis:** “Therefore we hypothesise that if we give them a registration 'badge' or tell them the benefits of the registration scheme, this will encourage them to register for the scheme”.
- **Testing approach:** “We'll know this is true/false when we show operators a mocked up booking platform listing with a registration 'badge' on, or an example GOV.UK 'Starting a service' page for 'Registering a short term let' service outlining the benefits of the scheme for them, and get feedback about whether they would be happy to use such a service and whether these benefits/'rewards' would encourage them to register”

We did this at the same time as writing the hypotheses, creating them for each assumption in turn, as the hypotheses were often closely linked to the testing approaches.

## 5\. Assumption Grouping:

Once we’d generated a hypothesis and testing approach for each risky assumption, we grouped them into seven groups, based on the similarity of the user involved, the hypotheses and/or testing approaches:

* Service ownership and operation
* Short-term Let Operators and Management Companies
* Booking platforms
* Local Authorities
* Technical exploration
* Compliance
* Impact of the Service


## 6\. Review and Finalisation:

We then reviewed the risky assumptions as a team to establish the potential time and effort involved in testing each one, including any prototyping work required; and discussed the feasibility of testing all of them in our Alpha from a resource perspective. We agreed that they were provisionally all feasible to test, but that we may need to re-prioritise during the Alpha if needed.

Lastly, we also reviewed the feasibility of testing the risky assumptions in the context of an Alpha phase where the service is not yet built or collecting live data. As a result of this, we decided not to proceed with testing the assumptions in the ‘Impact of the Service’ group in Alpha, as we would not be able to test these until the service was up and running.

This left us with 6 final risky assumption groupings:

* Service ownership and operation
* Short-term Let Operators and Management Companies
* Booking platforms
* Local Authorities
* Technical exploration
* Compliance

## Addition, merge and de-prioritisation

As we progressed through the Alpha, our discussions around the service (particularly during service blueprinting sessions) led to the identification of three additional risky assumptions that we felt it would also be important to test during the Alpha.

We also merged two risky assumptions (10 and 15\) into one , as they both related to use of the collected registration data.

We took stock of our progress in testing our risky assumptions in a mid-way Alpha review (especially in light of having added a few to the already long list\!), and decided to de-prioritise four  risky assumptions relating to Service Ownership and Operation \- as these needed either data collection once the service was built and running in Beta to inform them, or policy decisions to be made first around how the service would work.

## Assumptions outlined in this Design History

As mentioned above, we used our risky assumptions to focus our exploration and testing during Alpha; however, as many of these assumptions are tied to ongoing policy exploration around how the registration scheme might work they are not suitable for sharing at this point, and therefore are not currently included in the Design History . We may update this Design History with our findings and thoughts on them once further policy decisions are made. The assumptions which are not able to be shared at this moment are those in the following groups:

* Service ownership and operation
* Booking platforms
* Local Authorities
* Technical exploration
* Compliance

### Risky assumptions included within this Design History

Below is a list of the assumptions which are currently detailed in this Design History (list is correct at the time of publishing). These assumptions are those from the  Short-term Let Operators and Management Companies grouping:

* **Assumption 3:** We assume that operators won't register their properties unless there's a compelling reason to do so

* **Assumption 7:** We assume that operators with multiple STLs will be put off registering by having to separately register each of their properties

* **Assumption 9:** We assume that the register will collect data from operators that is useful to LAs about STL premises in their local area

* **Assumption 13:** We assume that prospective/new operators follow a similar process when finding out their STL responsibilities

* **Assumption 16:** We assume that operators will understand the STL regulations they need to comply with as part of the scheme

* **Assumption 21:** We assume that the needs of prospective/new STL operators are different to those of existing operators

* (**Assumption 23:** We assume that we can share the data we collect in a way that reassures operators that it’s being shared safely \- ***subsequently de-prioritised, as insufficient resource to test during Alpha)***

* **Assumption 26 *(added mid-way through Alpha)*:** We assume that the registration scheme will not put off so high a proportion of STL operators and management companies that it damages the STL sector

## Assumptions Log

* We created an Assumptions “log” (via a shared Google sheet) to capture our assumptions, hypotheses and testing approaches, and to track our design and research for each assumption.
* This enabled a cross-team view of progress per assumption, including key findings; and captured any key decisions e.g. around re-prioritisation. The assumptions log was updated regularly to reflect these decisions.

## Less Risky Assumptions
We identified many other assumptions as part of our assumptions generation, mapped as either:

* More important but more known
  * E.g. initial comms will be needed to drive awareness of the scheme
* Less known but less important
  * E.g. operators will register in a timely manner
* Less important and more known
  * E.g. we can integrate with the EPC register, should we wish to

These were not a focus for Alpha testing, but were also captured in our Assumptions log, and if necessary they will be items to explore and test during Beta.

## Using our assumptions for Beta
During planning for Beta, the assumptions that have been tested as part of the Alpha phase will be reviewed using the same ‘known’ and ‘important’ scale. Furthermore, we will aim to identify any assumption that should be tested as a priority in the Beta stage.
