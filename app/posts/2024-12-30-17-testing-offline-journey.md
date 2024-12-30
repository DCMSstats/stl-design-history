---
title: Testing the offline journey  
date: 2024-12-30
tags:
  - offline
---

{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}

{{ govukInsetText({
  text: "Please note: the screenshots shown here document the evolution of the design and are not indicative of the final service."
}) }}

## What we tried to achieve

We wanted to understand more about whether there are owners and operators of short-term lets who would use an offline version of the registration service, and how we could make this the best possible experience for them. Amongst other things, we were aiming to understand:

* The number of offline short-term let operators compared to online short-term let operators  
* What would they expect from the offline journey  
* How we could iterate and improve the service blueprint to improve the offline journey  
* How we could iterate and improve the offline user experience

This was not linked to one of our riskiest assumptions, but it would help us learn more about an assumption that we created in the assumption generation session:

*“We assume that STL operators who don't have digital access or skills and will need an offline way to register on the scheme”*

It would also help us to meet two points of the [Service Standard](https://www.gov.uk/service-manual/service-standard): ‘3. Provide a joined up experience across all channels’ and ‘5. Make sure everyone can use the service’.

## How we tested our assumption: methods, validation, and rationale

### Our testing approach

We devised numerous ways of recruiting and engaging with offline users, these can be read about in more detail on [our research and testing methodology](/14-research-and-testing-methodology) page. The offline testing approach that we created was adaptable to the different user research techniques that we considered for offline testing. These were:

* Pop-up research sessions in a communal space for face-to-face usability testing sessions  
* Using management companies to recruit ‘offline users’  
* Using local digital inclusion or IT support sessions  
* Using digital inclusion teams within local authorities

#### Research Methods

##### Pop-up research sessions in a communal space

One approach was to recruit offline users through community spaces that are typically used by non-digital individuals. We identified locations in England with the highest prevalence of owners of second homes who use them as holiday lets. We then reached out to public libraries in those locations to explore the possibility of conducting guerilla research there as we recognised the role of libraries as a space for individuals who might be digitally excluded who visit libraries to seek assisted digital support for a range of essential services. We ran one pop up research event at Charing Cross Library in the hope of engaging with offline users. 

##### Using management companies to recruit ‘offline users’

We attempted a range of routes to identify non-digital short-term let owners and operators in order to test the offline registration journey with them including the paper registration form. 

One of our plans involved recruiting non-digital short-term let owners and operators through management companies as we hypothesised that offline or less digitally confident owners might delegate digital tasks (such as listing a property on booking platforms) to management companies. At the end of our survey of management companies (see further in this section for more detail on this), we asked them to provide their contact details if they were able to help us to conduct research with offline short-term let owners.

##### Using local digital inclusion or IT support sessions to recruit ‘offline users’

We approached a range of public libraries and organisations that run digital inclusion and IT support sessions for community members in their area to explore the possibility of conducting research with their attendees before or after the sessions. We hypothesise that attendees of these sessions can act as proxies for our target user group for the offline version of the service \- that is, individuals who prefer to use a paper form for government services. We also hypothesise that recruiting participants from these sessions might be more successful than our pop-up research at Charing Cross Library as it would be more targeted. We don’t expect to have control over whether any attendees are involved in running a short-term let or are landlords, but given the significant challenges with identifying short-term let owners who are non-digital, our priority is testing the prototype forms with people who are unlikely to want to engage with a government service online.

##### Using digital inclusion teams within local authorities to recruit ‘offline users’

We also identified digital inclusion teams within local authorities as a potential route for recruiting offline users. Towards the end of our alpha phase, we engaged with the digital inclusion team of one local authority and identified the possibility of recruiting some offline users through their digital support partners. This will require further exploration in beta in order to determine if it will be a viable recruitment route.  

Below is an overview of what we created as part of the testing approach.

#### Screener

For our pop-up research we created a set of screener questions. The purpose of this screener was to ascertain whether the person volunteering to take part would be a good fit for our research. We wanted to make sure that we were testing with people who would be actually users of the service, or at least could conceivably use the service for a certain scenario.

The questions used in that screener are shown below: 

###### Screener

“Before we start, would you be happy to answer a few questions so we can understand if you are appropriate/eligible for this research?”

###### Understanding digital literacy

Q1. If you needed to complete a Government application (i.e. vehicle tax, passport application, confirming who is eligible to vote where you live) what would be your preferred method; online, telephone, paper form?

[Probe to understand why if necessary]

* IF preference is offline \= continue to Q2  
* IF preference is online \= screen out

###### Residential status

  Q2. Which of the following best describes your residential status in England?

  1. Property owner  
  2. Private renter   
  3. Social renter  
  4. No fixed address  
  5. Other   
* IF Owner or Renter  \= use for pop-up research  
* IF ‘no fixed address’ or ‘other’ \= screen out

#### Scenario

We devised a scenario that we would use as part of our pop-up research. This scenario was created so that it could cater for as many possible potential users of the service as possible. 

“A neighbour/friend/family member has told you they have decided to let out one of the rooms in their property on a short-term basis to people visiting the area. They believe this will be a good additional income for them.

You think this sounds like a good thing for you to do too. Your neighbour/friend/family member has told you that they had to register their room to do this. You have obtained a ‘Register a short-term let’ form to register for yourself.

We will now provide you with an example of this form and would like to observe how you go about filling it in.”

Participants at the pop-up research would be provided with this scenario and then asked to complete the paper form that was created as part of the offline journey tested, there is more detail on this in the ‘[Creating the ‘STL01 Application to register short-term lets’ paper form prototype’](#creating-the-‘stl01-application-to-register-short-term-lets’-paper-form-prototype) section below.

#### Prompts

We drafted a set of prompts that could be used with participants in a face to face setting. These prompts were designed to gather feedback on the paper forms we had created and also around how they use offline services in general.

##### Example prompts

Below are some suggestions for prompts at certain points of the testing of the ‘STL01 Application to register short-term lets’ paper form.

###### Before starting

* Tell me where you would go to find out about a scheme such as this? (think about other government services you’ve experienced, if helpful)  
* What other research might you do into renting out a room like this?  
* How would you expect to be able to get hold of a form like this? (think about other government services you’ve experienced, if helpful)

###### At end of Intro page

* What are your thoughts on the information in this section?  
  * Is it in line with your expectations or not?

###### At end of Guidance page

* What are your thoughts on the information in this section?  
  * Is it in line with your expectations or not?  
  * What do you think about the “warning” / benefits information?

###### At end of Section 1 - Personal details

* What are your thoughts on the information you have been asked to provide in this section?  
  * Is it in line with your expectations or not?

###### During Section 2 - Short-term let property details (specifically pg19 Compliance & pg25 Compliance Documents)

* How would you expect to provide compliance docs (eg photocopy / originals)?

###### At end of Section 2 - Short-term let property details

* What are your thoughts on the information you have been asked to provide in this section?  
  * Is it in line with your expectations or not?  
* If you wanted to also rent out additional rooms in your property, how do you think you would do that?  
* [Introduce STL02 here if appropriate]

###### At end of Section 3 - Declaration

* What are your thoughts on the information you have been asked to provide in this section?  
  * Is it in line with your expectations or not?

###### P24 Section 4 - How to pay

* How would you expect to pay for this service?

###### Upon completing the form

* What would you expect to happen next?  
* Would you expect any type of confirmation? And if so, how? 

[Conditional on if the participant struggled with a particular section]

  If you recall, you struggled with [insert name of section] - how would you expect to get help completing the form if you got stuck? (think about other government services you’ve experienced, if helpful. Examples \= contact centre helping them, local authority staff helping them, contact centre completing online form over phone on their behalf instead)

### Creating the ‘STL01 Application to register short-term lets’ paper form prototype

To help test the offline journey we mocked up a paper form version of the digital registration form. This process began by doing some desk research of other offline forms for government services, some examples of these are ‘Apply for a passport’ and ‘Applying for student finance’. Doing this allowed us to understand some of the best practices that are used for paper forms versus online forms.

Next, it was a case of taking all the sections and questions from the online prototype and replicating them on a paper form. This was the first iteration of the ‘STL01 Application to register short-term lets’ paper form. When doing this, we also made sure to include all the corresponding hint text and guidance so that users would have as much information as possible when completing the paper form.

![The screenshot shows how the ‘Short-term let property details’ questions were replicated in the paper form, and also how the guidance was displayed.](/2024-12-30-17-testing-offline-journey/image1.png)


Once this was completed we improved the form by adding additional information about the service, with this information taken from the ‘Short-term let registration: detailed information’ page which includes sections such as ‘Overview of short-term let registration scheme in England’, ‘How do I operate a short-term let?’, ‘Who qualifies to complete the short-term let registration?’, ‘Check the type of dwelling that needs registration’ and more. The aim of this was to ensure that users following the offline journey had as much information as those using the online journey. We placed all this information at the beginning of the paper form alongside additional guidance that we created to tell users in what circumstances they could use this form. 

![The screenshot shows the first guidance page of the ‘STL01 Application to register short-term lets’ paper form.](/2024-12-30-17-testing-offline-journey/image2.png)



The paper form also had to allow for questions which can have multiple answers, for example it had to have the ability to capture multiple owners. An example of how this was done is shown in the screenshot below.

![Screenshot of an example page from the paper registration form showing a question with multiple answers. In this case, the form enables multiple owners to be captured.](/2024-12-30-17-testing-offline-journey/image3.png)



The ‘STL01 Application to register short-term lets’ paper form was by default designed to allow its user to register up to three properties in one form. The team then created ‘STL02 Application to register short-term lets’ which allowed the user to register more than three properties. It was designed to be submitted alongside the ‘STL01 Application to register short-term lets’ form. 

![The screenshot shows the first guidance page of the ‘STL02 Application to register short-term lets’ paper form, which allowed the user to register more than three properties.](/2024-12-30-17-testing-offline-journey/image4.png)



We also attempted to uncover information about the size of the offline user base by speaking to trade associations and bodies. We had some informal conversations with them about how to recruit offline users and they provided some anecdotal information about what they perceive the size of the offline user group to be.

## Our findings

Findings of our offline testing approach are summarised below. 

### Findings from pop up research

Unfortunately our pop-up research attempt at Charing Cross Library was not successful as we were not able to test the paper version of the registration form with anyone as none of the individuals who approached us fitted our widened screening criteria. As a result of this we do not have any findings from this method. 

### Findings from other research methods 

Other research methods were unsuccessful in their attempts to recruit offline users, however this was partly due to time constraints with further research needed during Beta into the viability of some of these methods to help test the offline form during the Beta phase.

We attempted to use management companies to recruit offline users, however this was unsuccessful as none of the management companies we surveyed referred us to non-digital clients. 

Due to time constraints, we were not able to conduct research with attendees of public library digital inclusion or IT support sessions. Therefore, no research participants were recruited but we do plan to use this approach for recruiting offline users for research in Beta. 

Moreover, at the end of the Alpha phase we engaged with the digital inclusion team of one local authority and identified the possibility of recruiting some offline users through their digital support partners. We will explore this recruitment route further in Beta.


### Other findings related to offline users

#### 1. We suspect the proportion of non-digital short-term let operators is very low vs digital short-term let operators.

This suspicion is due in part to the nature of the short-term lets sector; and that operators will typically need to have some online presence in order to attract guests to their properties. Also there is an assumption that non-digital operators may use management companies to carry out digital tasks on their behalf (e.g. listing their property on booking platforms) and therefore that group do have some access to the online journey, albeit through another party.  
