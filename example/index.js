class MergeElements {
    /**
     *
     let mergeE = new MergeElements()
     * @description a way to insert into elements 
     * @date 2022-02-01
     * @returns {any}
     */
    constructor() {

    }
    getNode(el) {
            if (typeof el === "string") {
                return $(el)
            } else {
                return el;
            }
        }
        /**
         * mergeE.insertAsFirst($("[data-child=1] .grandchild"), newElement)
         * @example
         let newElement = $("<div>insert me as first</div>")
         mergeE.insertAsFirst($("[data-child=1] .grandchild"), newElement)
         * adopting an older kid
         */
    insertAsFirst(element, elementToAddAsFirst) {
            let el = this.getNode(element)
            let elFirst = this.getNode(elementToAddAsFirst)
            el.prepend(elFirst)
        }
        /**
         * mergeE.wrapEach($(".dropdown > *"), newWrapper)
         * @example 
         let newWrapper = $("<div class='box'></div>")
         mergeE.wrapEach($(".dropdown > *"), newWrapper)
         */
    wrapEach(element, wrapper) {
            let el = this.getNode(element)
            let wrap = this.getNode(wrapper)
                // let wrapper = $('<div>wrapper</div>')
            $(el).wrap(wrap)
        }
        /**
             * mergeE.addToEndOfNthElement(".dropdown-item", 3, newItem)
             * @example
             * // index works the same as in js, starts with 0
             *   let newItem = $("<div>newdropdown</div>")
        mergeE.addToEndOfNthElement(".dropdown-item", 3, newItem)
             * @date 2022-02-01
             * @returns {any}
             */
    addToEndOfNthElement(element, index, elementToInsertInto) {
            let getEl = this.getNode(element)
            let el = this.getNode(elementToInsertInto)
            console.log(el)
            let child = $(getEl.eq(index))
            console.log(child.attr("data-id"))
            el.appendTo(child)
        }
        /**
         * mergeE.addToBegOfNthElement(".dropdown-item", 3, newItem2)
         * @example
         * // index works the same as in js, starts with 0
         let newItem2 = $("<div>newdropdown</div>")
         mergeE.addToBegOfNthElement(".dropdown-item", 3, newItem2)
         * @returns {any}
         */
    addToBegOfNthElement(element, index, elementToInsertInto) {
            let getEl = this.getNode(element)
            let el = this.getNode(elementToInsertInto)
            let child = $(getEl.eq(index))
            el.prependTo(child)
        }
        /**
         * @example
         let newDropdown1 = $(`<a href="#" class="dropdown-item" data-id='0'>og0</a>`)
         mergeE.insertBefore($("[data-id=1]"), newDropdown1)
         * @date 2022-02-02
         * @returns {any}
         */
    insertBefore(element, elementToInsertBefore) {
            let el = this.getNode(element)
            let toInsert = this.getNode(elementToInsertBefore)
            toInsert.insertBefore(el)
        }
        /**
         *
         let newDropdown = $(`<a href="#" class="dropdown-item" data-id='6'>6</a>`)
         mergeE.insertAfter($("[data-id=5]"), newDropdown)
         * @date 2022-02-02
         * @returns {any}
         */
    insertAfter(element, elementToInsertAfter) {
            let el = this.getNode(element)
            let toInsert = this.getNode(elementToInsertAfter)
            toInsert.insertAfter(el)
        }
        /**
         * insertAsLast(element, child)
         * @date 2022-01-31
         * @param {any} element
         * @param {any} child
         * @returns {any}
         */
    insertAsLast(element, child) {
            let getElement = this.getNode(element)
            let getChild = this.getNode(child)
            $(getElement).append(getChild)
        }
        /**
         * findAllFirstOfElement(parent, first)
         * @returns {any}
         */
    findAllFirstOfElement(parent, first, callback) {
        let getParent = this.getNode(parent)
        let getFirst = this.getNode(first)
        getParent.each((index, element) => {
            callback($(element).find(getFirst).first())
        })
    }
    getAllElementsWithinParent(parent, selector) {
            let getParent = this.getNode(parent)
            let getE = this.getNode(selector)
            let getChildren = getParent.contents().find(getE)
                // console.log(getChildren)
            return getChildren
        }
        /**
         * @example 
//     let getText = mergeE.getAllTextWithinElement("[data-parent='2']")
         * getAllTextWithinElement(element)
         * @returns {any}
         */
    getAllTextWithinElement(element) {
            let getE = this.getNode(element)
            return $(getE).text()
        }
        // for each element that has this class, if it has this element inside it, then select its sibling 
        // use case: [data-id=2], get its input
        /**
         * @example
         * mergeE.getElementBasedOnSibling("[data-greatgrandchild='2']", ".great-grandchild", changeToGreen)
         * @returns {any}
         */
    getElementBasedOnSibling(sibling, element, callback) {
            let getSib = this.getNode(sibling)
            let siblings = getSib.siblings(element)
            siblings.each((index, element) => {
                callback($(element))
            })
        }
        /**
         * @example
         let newLastInsertion2 = $("<div>yoyoas last</div>")
         mergeE.insertAsFirstIntoNthElement(".grandchild", 2, newLastInsertion2)
         * @returns {any}
         */
    insertAsFirstIntoNthElement(element, order, firstElementInNth) {
            let secondChild = $(`${element}:nth-child(${order})`)
            firstElementInNth.prependTo(secondChild)
        }
        /**
         * insertAsLastIntoNthElement("")
         * @date 2022-01-31
         * @param {any} nthElement
         * @param {any} lastElementInNth
         * @returns {any}
         */
    insertAsLastIntoNthElement(element, order, lastElementInNth) {
            let secondChild = $(`${element}:nth-child(${order})`)
            lastElementInNth.appendTo(secondChild)
        }
        /**
         * @example
         * mergeE.changeParent("[data-greatgrandchild='2']", ".parent", changeToPink)
         */
    changeParent(element, parent, callback) {
        let getElement = this.getNode(element)
        let getParent = this.getNode(parent)
            //  $(`.child[data-child='1']`).parent(`.parent`).before(`parent`)
        let parents = getElement.parent(getParent)
        console.log(parents.length)
        parents.each((index, e) => {
            console.log($(`${parent} > *`))
            let children = $(`${parent} > *`)
            children.each((i, child) => {
                callback($(child))
            })
        })
    }

}

let mergeE = new MergeElements()
$(document).ready(function() {

    console.log("hello")
        // first test 
    let newElement = $("<div>insert me as first</div>")
    mergeE.insertAsFirst($("[data-child=1] .grandchild"), newElement)

    // create dropdown content
    let newWrapper = $("<div class='box'></div>")
    mergeE.wrapEach($(".dropdown"), newWrapper)



    // add this item to the third dropdown item in dropbox
    let newItem = $("<div>newdropdown</div>")
    mergeE.addToEndOfNthElement(".dropdown-item", 0, newItem)
    let newItem2 = $("<div>newdropdown</div>")
    mergeE.addToBegOfNthElement(".dropdown-item", 3, newItem2)
        // insert before and insert after 
    let newDropdown = $(`<a href="#" class="dropdown-item" data-id='6'>6</a>`)
    mergeE.insertAfter($("[data-id=5]"), newDropdown)

    let newDropdown1 = $(`<a href="#" class="dropdown-item" data-id='0'>og0</a>`)
    mergeE.insertBefore($("[data-id=1]"), newDropdown1)

    // insert as last 
    // first test 
    let newLastInsertion = $("<div>insert me as last</div>")
    mergeE.insertAsLast($("[data-child=1] .grandchild"), newLastInsertion)

    function changeToGreen(element) {
        element.css("color", "green")
    }

    function changeToPink(element) {
        element.data("test", "test2")
        element.css("color", "pink")
    }
    let getText = mergeE.getAllTextWithinElement("[data-parent='2']")
    console.log(getText)
        // console.log(getTextTest)

    mergeE.getAllElementsWithinParent(".grandparent", ".child")

    mergeE.getElementBasedOnSibling("[data-greatgrandchild='2']", ".great-grandchild", changeToGreen)
    let newLastInsertion2 = $("<div>yoyoas last</div>")
    mergeE.insertAsLastIntoNthElement(".grandchild", 2, newLastInsertion2)
    mergeE.changeParent("[data-greatgrandchild='2']", ".parent", changeToPink)
    let getParentElement = $(".child").eq(0)
})