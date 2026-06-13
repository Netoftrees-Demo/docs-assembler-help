## Aim: 
 - to make installing extension and editing and publishing first map like falling off a bike.
 - have a single message - don't dilute the extension.
 - To get one user chatting to me
 - To get one Chinese user
 

 ### Will show modularity 
- Open demo repo, everything is already installed

 ### Demo website
 - Go to website 
    - navigate to tech notes, balcony and winter temp
    Show the clock on the pc

### Demo repo
 - Open DocumentationHell
    - Click root - shows link - click open map button
    - Opens DocumentationHellContents
        - Scroll down to DemoIntroduction, click to open link, open map
            - Opens DemoIntroduction
                - Click to open link, open map
                    - Opens FoodGrowingSpacePlan
                        - Click to open Balcony link, open map
                            - Opens Balcony
                                - Click to open Customisation link, open map
                                    - Opens Customisation
                                        - Click root, open map
                                            - Climate opens
                                                - Click WinterTemperatures link, open map
                                                    - WinterTemperatures opens
                                                        - Right click root and select Open in Markdown Editor
                                                        - Add a blank line and the following:

*If the lowest temperature is above 0°C, select 0°C; if below -20°C, select -20°C.*

Click file save
Close all docs
Collapse Explorer
Go back to DocumentationHell
Click Publish
Show compare
Click move to docs
Commit with message:
'CloneDemoQuickStart video tutorial edit'
Sync


 ### Demo website
 - Go to website 
    - navigate to tech notes, balcony and winter temp show the new message
    - navigate to garden and to winter temp shows same message.

    Show the clock on the pc

END


### Build video
- Add to readme.md


### Tutorial to show how to:
- Install Extension
- Fork Demo from GitHub
- Clone forked Demo repo
- Make same changes on it made in video
- Publish to their website
- Tell them to experiment
- Add to readme under video

Similar tutorial that shows you how to create you own repo from scratch
Use the same instructions as the fork tutorial to show how can save editing.




Build readme text tutorial
- Add to readme
Build tutorial with images
- Create another help repo and move to  that one
- Push the tutorial with images to help
Build tutorial with videos
- Push to help



## Narration

The video is a quiet tour of three things:
- a massive decision-tree that stays nimble
- a single edit that ripples everywhere
- and an editor that makes the whole thing about writing, not engineering.

This is the docs-assembler-demo repo open in vscode
*https://github.com/netoftrees/docs-assembler-demo*

This is the DocumentationHell map
It has 2 steps.
Selecting the root opens it in the lens.
It's a link to the map DocumentationHellContents
Scrolling down the lens to DocumentationHellContents details, to click the open button 
The map DocumentationHellContents opens showing the steps.
These auto-merge into each other. 
We chose to break this markdown into smaller steps, but you don't have to.
Now we'll open the repo website hosted on GitHub Pages. 
*https://netoftrees.com/docs-assembler-demo/* 
This is the DocumentationHell guide.
The h1 header 'Escape Documentation Hell' in the map corresponds with the guide's main title.
And the next one... and so on.
At the end is the question 'How would you like to continue?'
Here it is in the map.
It has 2 options.
In Chrome we'll click the second
to expand its branch and again the steps match up with the text.
You can see some ancillaries to the right hand side - we'll introduce those in another video.
        <!-- Ancillaries are expandable detail attached to a step. Readers who need detail can expand it; those who don't, won't be overwhelmed.
        Ancillaries can be nested.
        In this case it expands another linked map.
        The steps match up with the text.
        Back to the main branch. -->
If we scroll down the guide there is a single option to 'Start the demo'
In the DocumentationHellContents map after 'Peek Under the Hood' there's another link, to DemoIntroduction.
So DemoIntroduction is contained within DocumentationHellContents which is itself contained in DocumentationHell.
We drill down into FoodGrowingSpacePlan 
That has 5 options all linking to different location maps.
Select Balcony
Balcony has a link to Power. Here you can see Customisation is plugged into both exits of the Power map. 
        <!-- has 2It has 2 exits< Power supply or none. And each of those exits is plugged into another map. You've seen them nested, now you have seen them chained. -->
We'll keep drilling down until we find WinterTemperatures.
To edit the root step.
Right click the root, and select 'Open step in Markdown Editor'
Steps are markdown files that can be edited in any text editor. 
This markdown references a map variable. 
We'll introduce steps and variables in separate videos.
        <!-- This ia a variable that is defined in a child map but can be overriden in any parent map.
        Right click the variable and select ' Go to definition'
        Here you can see its value is 'in your vertical garden location'.
        But that is not the text shown in the guide.
        If we go back to the Balcony map and open it map variable file we can see it defined as on your patio or balcony' which is the value displayed in the online guide.
        If we go to definition it open WinterTemperatures map variable file
        There are other variables types too. -->
Let's add this line to the markdown:
*If the lowest temperature is above 0°C, select 0°C; if below -20°C, select -20°C.*
Save the change
Tidy up.
Re-open DocumentationHell and click publish.
This will assemble the guide in the pub folder, with all referenced sub-guides / assets. 
When completed in the Compare tab you can see the published files against the same location in the docs folder. Selecting a file opens the docs and pub versions in a diff view. If a file has changes it is orange, deleted, red, new green, otherwise white.
We'll click 'Approve Changes' and then 'Move pub content to docs'
In the git window you can see 2 files with changes.
The map step and the published guide fragment.
Commit them, and sync with GitHub to push the changes to the website.
        <!-- In the GitHub Actions page for the repo wait for the Pages publish to finish. -->
In a new window open demo again, browse to the same location and you can see the change. 
But the change has propagated everywhere, like for the Sunlight room or for different max temperatures.

The guide is big. Try expanding all the options and you'll see...
Yet it is easy to maintain and edit. There is zero lock-in as it publishes to markdown.

"First: scale without fear. 
When your documentation is built from encapsulated, reusable components — like classes — complexity becomes manageable.
Second: zero lock-in. Everything you just saw publishes to plain Markdown. Uninstall the extension tomorrow and your docs still work. In any static site generator. Forever. Your content is yours.





You have been writing decision trees your entire life. Your tools just forced you to flatten them.
To the reader, this is just a document. They never see the machinery. They just follow their path.
You don’t stop writing prose. You stop repeating it.
You have identified the real product. It is not "decision trees." It is infinite decision trees. 

| If you say/do this…                              | They think this…                       | Instead…                                                            |
| ------------------------------------------------ | -------------------------------------- | ------------------------------------------------------------------- |
| *“It’s like code classes for your content.”*     | “This is for developers, not writers.” | *“It’s like reusable paragraphs that know where they belong.”*      |
| Show JSON structure first                        | “I have to learn a schema.”            | Show Markdown first. The JSON is just the table of contents.        |
| Call it a “decision tree” early                  | “I write articles, not flowcharts.”    | Call it a “guide that adapts” or “a document that branches.”        |
| Over-simplify to “just break things into chunks” | “I already use headings.”              | Show the *reuse*—the same chunk living in two paths simultaneously. |
| Show the Git sync in detail                      | “Now I have to be a sysadmin.”         | One cut: *“Commit, push, live.”*                                    |


Docs Assembler is not a diagramming tool. It is a compiler. And like code, it does not care if your tree has ten nodes or ten thousand.
Use the helicopter view (from your README) of a massive map. Zoom out until the tree is a dense neural network. Hold for 5 seconds. Then narrate:


Every decision-tree app you have ever used broke before it got interesting. They promise branching logic, then choke at a few hundred nodes. They become un-auditable. Unmaintainable. Abandoned. That is because they are not built to scale. They are built to diagram.

"Docs Assembler is not a diagramming tool. It is a compiler. And like code, it does not care if your tree has ten nodes or ten thousand."

"This is a single guide. It has more paths than there are pages in a novel. In prose, this would be a warehouse of duplicated files. Here, it is a handful of maps that call each other like functions."

There are 10¹⁶ paths through this guide and it was built with a text editor for building documents that branch. Try it. It was not built with code but a text editor. One for building documents that branch.


"That is the quiet power of it. Complex, branching knowledge. Maintained like a single document. Delivered like prose."


“And when you are ready, this same structure becomes the source of truth that keeps AI agents honest.” - Then cut to black. It is a door left open, not a room you force them to enter.