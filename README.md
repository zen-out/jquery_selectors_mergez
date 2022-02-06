# Purpose 

The purpose of this package is to allow users to quickly select and change various elements. 

## Directions

1. Install the package 

```
npm install jquery-selectors-mergez 
```

2. In your html document, import the script (make sure to import it after your JQuery script, and before your javascript file)

```
<script src="./node_modules/jquery_selectors_mergez"></script>
```

3. Create javascript file and import it 

```
<script src="yourScript.js"></script>
```

API 

| What it does                                                          | Example                                                                                  |     |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | --- |
| mergeE.insertAsFirst()                                                | `` `mergeE.insertAsFirst($("[data-child=1] .grandchild"), $("<div>new Element</div>"))` `` |     |
| mergeE.wrapEach()                                                     |                                                                                          |     |
| mergeE.addToEndOfNthElement(element, index, elementToInsertInto)      |                                                                                          |     |
| mergeE.addToBegOfNthElement(element, index, elementToInsertInto)      |                                                                                          |     |
| mergeE.insertBefore(element, elementToInsertBefore)                   |                                                                                          |     |
| mergeE.insertAfter(element, elementToInsertAfter)                     |                                                                                          |     |
| mergeE.insertAsLast(element, child)                                   |                                                                                          |     |
| mergeE.getAllElementsWithinParent(parent, selector)                   |                                                                                          |     |
| mergeE.getAllTextWithinElement(element)                               |                                                                                          |     |
| mergeE.getElementBasedOnSibling(sibling, element, callback)            |                                                                                          |     |
| mergeE.insertAsFirstIntoNthElement(element, order, firstElementInNth) |                                                                                          |     |
| mergeE.insertAsLastIntoNthElement(element, order, lastElementInNth)   |                                                                                          |     |
| mergeE.changeParent(element, parent, callback)                        |                                                                                          |     |

#### Insert to the first of all selectors 

* Problem: It's just a way to ensure that whatever I pass in (either a string or a jquery object, will be valid)
* What it does: Selects the new element into the first of the selected element 

```
mergeE.insertAsFirst(element, elementToAddAsFirst)
mergeE.insertAsFirst($("[data-child=1] .grandchild"), newElement)
```

#### Wrap this element 

```

```

#### Add to the Nth Element

Use Case: Want to add an emoji to the first comment of every user 

#### Add to the beginning of nth element 

User Case: Add a new item to a task list 

#### Insert Before 

Use Case: Ensures that you can select each element and 
