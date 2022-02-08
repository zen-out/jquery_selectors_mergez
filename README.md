![NPM Downloads](https://img.shields.io/npm/dw/jquery_selectors_mergez)

# Purpose 

The purpose of this package is to allow users to quickly select and change various elements. 

![JQuery Selectors](https://dl.dropbox.com/s/py4rhrl52k8yy7n/jquery_selectors.png)

## Directions

1. Install the package 

```
npm install jquery-selectors-mergez 
```

2. In your html document, import the script (make sure to import it after your JQuery script, and before your javascript file)

```
<script src="https://cdn.jsdelivr.net/npm/jquery_selectors_mergez/index.js"></script>
```

3. Create javascript file - make sure to put all your jquery selectors after the instantiator - e.g., 

```
$(() => {
 mergeE.insertAsFirst($("[data-child=1] .grandchild"), $("<div>new Element</div>"))
})
```

```
<script src="yourScript.js"></script>
```

#### mergeE.insertAsFirst()

mergeE.insertAsFirst($("[data-child=1] .grandchild"), newElement)

**Kind**: instance method of [<code>mergeE</code>](#mergeE)  
**Example**  

```js
let newElement = $("<div>insert me as first</div>")
mergeE.insertAsFirst($("[data-child=1] .grandchild"), newElement)
```

<a name="mergeE+wrapEach"></a>

#### mergeE.wrapEach()

mergeE.wrapEach($(".dropdown > *"), newWrapper)

**Kind**: instance method of [<code>mergeE</code>](#mergeE)  
**Example**  

```js
let newWrapper = $("<div class='box'></div>")
mergeE.wrapEach($(".dropdown > *"), newWrapper)
```

<a name="mergeE+addToEndOfNthElement"></a>

#### mergeE.addToEndOfNthElement() ⇒ <code>any</code>

mergeE.addToEndOfNthElement(".dropdown-item", 3, newItem)

**Kind**: instance method of [<code>mergeE</code>](#mergeE)  
**Date**: 2022-02-01  
**Example**  

```js
// index works the same as in js, starts with 0
let newItem = $("<div>newdropdown</div>")
mergeE.addToEndOfNthElement(".dropdown-item", 3, newItem)
```

<a name="mergeE+addToBegOfNthElement"></a>

#### mergeE.addToBegOfNthElement() ⇒ <code>any</code>

mergeE.addToBegOfNthElement(".dropdown-item", 3, newItem2)

**Kind**: instance method of [<code>mergeE</code>](#mergeE)  
**Example**  

```js
// index works the same as in js, starts with 0
let newItem2 = $("<div>newdropdown</div>")
mergeE.addToBegOfNthElement(".dropdown-item", 3, newItem2)
```

<a name="mergeE+insertBefore"></a>

#### mergeE.insertBefore() ⇒ <code>any</code>

**Kind**: instance method of [<code>mergeE</code>](#mergeE)  
**Date**: 2022-02-02  
**Example**  

```js
let newDropdown1 = $(`<a href="#" class="dropdown-item" data-id='0'>og0</a>`)
mergeE.insertBefore($("[data-id=1]"), $("<div>insert before other element</div>"))
```

<a name="mergeE+insertAfter"></a>

#### mergeE.insertAfter() ⇒ <code>any</code>

let newDropdown = $( `<a href="#" class="dropdown-item" data-id='6'>6</a>` )

         mergeE.insertAfter($("[data-id=5]"), $("<div>insert after</div>"))

**Kind**: instance method of [<code>mergeE</code>](#mergeE)  
**Date**: 2022-02-02  
<a name="mergeE+insertAsLast"></a>

#### mergeE.insertAsLast(element, child) ⇒ <code>any</code>

insertAsLast($(".parent"), $(".child"))

**Kind**: instance method of [<code>mergeE</code>](#mergeE)  
**Date**: 2022-01-31  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 
| child | <code>any</code> | 

<a name="mergeE+findAllFirstOfElement"></a>

#### mergeE.findAllFirstOfElement() ⇒ <code>any</code>

findAllFirstOfElement(parent, first)

**Kind**: instance method of [<code>mergeE</code>](#mergeE)  
<a name="mergeE+getAllElementsWithinParent"></a>

#### mergeE.getAllElementsWithinParent(parent, selector) ⇒ <code>any</code>

mergeE.getAllElementsWithinParent($(".parent"), $(".selectorWithinParent"))

**Kind**: instance method of [<code>mergeE</code>](#mergeE)  
**Date**: 2022-02-06  

| Param | Type |
| --- | --- |
| parent | <code>any</code> | 
| selector | <code>any</code> | 

<a name="mergeE+getAllTextWithinElement"></a>

#### mergeE.getAllTextWithinElement() ⇒ <code>any</code>

**Kind**: instance method of [<code>mergeE</code>](#mergeE)  
**Example**  

```js
//     let getText = mergeE.getAllTextWithinElement("[data-parent='2']")
getAllTextWithinElement(element)
```

<a name="mergeE+getElementBasedOnSibling"></a>

#### mergeE.getElementBasedOnSibling() ⇒ <code>any</code>

**Kind**: instance method of [<code>mergeE</code>](#mergeE)  
**Example**  

```js
mergeE.getElementBasedOnSibling("[data-greatgrandchild='2']", ".great-grandchild", changeToGreen)
```

<a name="mergeE+insertAsFirstIntoNthElement"></a>

#### mergeE.insertAsFirstIntoNthElement() ⇒ <code>any</code>

**Kind**: instance method of [<code>mergeE</code>](#mergeE)  
**Example**  

```js
let newLastInsertion2 = $("<div>yoyoas last</div>")
mergeE.insertAsFirstIntoNthElement(".grandchild", 2, $("<div>insert</div>"))
```

<a name="mergeE+insertAsLastIntoNthElement"></a>

#### mergeE.insertAsLastIntoNthElement(nthElement, lastElementInNth) ⇒ <code>any</code>

insertAsLastIntoNthElement(".parent", 2, $("<div>insert</div>"))

**Kind**: instance method of [<code>mergeE</code>](#mergeE)  
**Date**: 2022-01-31  

| Param | Type |
| --- | --- |
| nthElement | <code>any</code> | 
| lastElementInNth | <code>any</code> | 

<a name="mergeE+changeParent"></a>

#### mergeE.changeParent()

**Kind**: instance method of [<code>mergeE</code>](#mergeE)  
**Example**  

```js
mergeE.changeParent("[data-greatgrandchild='2']", ".parent", changeToPink)
```

<!-- apistop -->
