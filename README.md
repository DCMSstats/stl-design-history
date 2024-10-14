# Design history for the Short Term Lets Service

A place for the Short Term Lets team to document service designs and decisions. This project has been set up using the x-govuk/govuk-design-history-template which is maintained by a small number of volunteers working across government. We have hosted the site using Github Pages.
To view this site use this link [https://dcmsstats.github.io/stl-design-history/](https://dcmsstats.github.io/stl-design-history/)

## To run locally

In the terminal:

- Clone the repo `git clone git@github.com:DCMSstats/stl-design-history.git`
- Install all the dependencies by running `npm install`
- Run `npm start`

## Adding a new post

To add a new post, follow the guidance provided by the [Design History Project](https://x-govuk.github.io/govuk-design-history/get-started/#document).

### Converting from Google Doc
If you want to convert a post from a Google Doc to be in the Design History:

1. `File -> Download -> Markdown (.md)`
2. Create a new file in the `posts` folder with front matter as detailed in the guidance, and copy and paste the download. Remove everything after the text of the post finishes. This is defining any images as data. Running locally, you should be able to see the new post, without images.
3. Edit the markdown to fix the layout. This will particularly involve changing bold text into headings, at the correct level.
4. `File -> Download -> Web page (.html, zipped)`
5. Open the zip file and copy the `images` from the images folder, into a new folder in the `app/images` directory, with the same name as the blog post (without the `.md`).
6. In the file for the post, search for `![][image`, and replace each image with a [normal markdown image](https://www.markdownguide.org/basic-syntax/#images-1) (this will involve swapping the second set square brackets for normal brackets). The remaining square brackets should contain your alt text, and the round brackets should contain a file path that looks like `/<name of the post>/<file name>`, e.g. `![Here is the alt text](/2024-08-22-2-service-blueprinting/image2.png)`
7. Check that all the images display properly in the post.
8. Commit the new files to the repository and push.


## Support & Technical notes

For guidance on the design history [see this website](https://x-govuk.github.io/govuk-design-history/get-started/).

We can report bugs or send feedback via, [submit a new issue](https://github.com/x-govuk/govuk-design-history-template/issues/new).

The design history uses the [GOV.UK Design System](https://design-system.service.gov.uk) and the [Eleventy](https://www.11ty.dev) static site generator with the [GOV.UK Eleventy Plugin](https://x-govuk.github.io/govuk-eleventy-plugin/).
