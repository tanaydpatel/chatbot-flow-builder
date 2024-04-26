# Chatbot flow builder

## Overview:

We’ll build a simple Chatbot flow builder using React and try to make the code extensible to easily add new features.
A chatbot flow is built by connecting multiple messages together to decide the order of execution.

#**Note →**

- Use https://reactflow.dev/ for the flow builder.
- You are free to use any other library on top of React Flow.
- You can use either of JavaScript or TypeScript for this Task
- Add comments to explain your code

## Features:

1. **Text Node**
   1. Our flow builder currently supports only one type of message (i.e Text Message).
   2. There can be multiple Text Nodes in one flow.
   3. Nodes are added to the flow by dragging and dropping a Node from the Nodes Panel.
2. **Nodes Panel**
   1. This panel houses all kind of Nodes that our Flow Builder supports.
   2. Right now there is only Message Node, but we’d be adding more types of Nodes in the future so make this section extensible
3. **Edge**
   1. Connects two Nodes together
4. **Source Handle**
   1. Source of a connecting edge
   2. Can only have **one edge** originating from a source handle
5. **Target Handle**
   1. Target of a connecting edge
   2. Can have **more than one edge** connecting to a target handle
6. **Settings Panel**
   1. Settings Panel will replace the Nodes Panel when a Node is selected
   2. It has a text field to edit text of the selected Text Node
7. **Save Button**
   1. Button to save the flow
   2. **Save button press will show an error if there are more than one Nodes and more than one Node has empty target handles**

## Setup steps

- Node version suggested 20.9
- npm i
- npm start
- Open http://localhost:3000
