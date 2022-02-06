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

3. Create javascript file - make sure to put all your jquery selectors after the instantiator - e.g., 

```
$(() => {
 insertAsFirst($("[data-child=1] .grandchild"), $("<div>new Element</div>"))
})
```

```
<script src="yourScript.js"></script>
```

API 

| What it does                                                          | Example                                                                                        |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| mergeE.insertAsFirst()                                                | ` `  ` mergeE.insertAsFirst($("[data-child=1] .grandchild"), $("<div>new Element</div>")) `  ` ` |
| mergeE.wrapEach()                                                     | ` `  ` mergeE.wrapEach($(".dropdown > *"), $("<div>wrapper</div>")) `  ` ` |
| mergeE.addToEndOfNthElement(element, index, elementToInsertInto)      | ` `  ` mergeE.addToEndOfNthElement(".dropdown-item", 3, $("<div>new</div>")) `  ` ` |
| mergeE.addToBegOfNthElement(element, index, elementToInsertInto)      | ` `  ` mergeE.addToBegOfNthElement(".dropdown-item", 3, $("<div>new</div>")) `  ` ` |
| mergeE.insertBefore(element, elementToInsertBefore)                   | ` `  ` mergeE.insertBefore($("[data-id=1]"), $("<div>insert before other element</div>")) `  ` ` |
| mergeE.insertAfter(element, elementToInsertAfter)                     | ` `  ` mergeE.insertAfter($("[data-id=5]"), $("<div>insert after</div>")) `  ` ` |
| mergeE.insertAsLast(element, child)                                   | ` `  ` mergeE.insertAsLast($(".parent"), $(".child")) `  ` ` |
| mergeE.findAllFirstOfElement(parent, selector)                        | ` `  ` mergeE.findAllFirstOfElement($(".parent"), $(".first")) `  ` ` |
| mergeE.getAllTextWithinElement(element)                               | ` `  ` getAllTextWithinElement($(".parent")) `  ` ` |
| mergeE.insertAsFirstIntoNthElement(element, order, firstElementInNth) | ` `  ` mergeE.insertAsFirstIntoNthElement(".grandchild", 2, $("<div>insert</div>")) `  ` ` |
| mergeE.insertAsLastIntoNthElement(element, order, lastElementInNth)   | ` `  ` insertAsLastIntoNthElement(".parent", 2, $("<div>insert</div>")) `  ` ` |
| mergeE.gotAllElementsWithinParent(parent, selector)                   | ` `  ` mergeE.getAllElementsWithinParent($(".parent"), $(".selectorWithinParent")) `  ` ` |
