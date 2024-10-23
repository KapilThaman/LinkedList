class Node{
    constructor(value,next){
        this.value = value;
        this.next = null;
    }
}

class Linkedlist{
    constructor(value){
            const newNode = new Node(value);
            this.head = newNode;
            this.tail = this.head;
            this.length = 1;
    }

     push(value){
        if(this.length == 0){
            const newnode = new Node(value);
            this.head = newnode;
            this.tail = this.head;
            this.length = 1;
        }
        else{
            const newnode = new Node(value);
            this.tail.next = newnode;
            this.tail = newnode;
            this.length = this.length + 1;
        }
    }
    pop(){
            let temp = this.head;
            let pre = this.head;
            
            while(temp.next){
                pre = temp;
                temp = temp.next;

            }
            this.tail = pre;
            this.tail.next = null;
            this.length--;
            if(this.length == 0){
                this.head = null;
                this.tail = null;
            }
            return temp;
    }

    unshift(value){
            const newnode  = new Node(value);
            newnode.next = this.head;
            this.head = newnode;
            this.length++;
            
    }
    shift(){
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;



    }
    get(value){
        let temp = this.head;
        while(temp.value !== value){
            temp = temp.next;
        }
        console.log(temp);
    }

    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp ;
        let next = this.temp;
        let prev = null;
        for(let i = 0; i< this.length; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }

    findKthFromEnd(k){
        let start = 1;
        let element = this.head;
        
        if(k == 1){
            return this.tail;
        }
        
        if(this.head.next == null && k == 1){
            element = this.head;
            return element;
        }
        if(k < 0){
            return null;
        }
        if(k == 0){
            return null;
        }
        
        while(start !== k){
            element = element.next;
            start ++;
        }

            if (k === start && element.next == null) {
        return this.head;  
    }
        
        element = element.next;
        return element
        
    }

    findMiddleNode(){
            
            
        let temp = this.head;
        let pre = this.head;
        
        if(this.head == null){
            return null
        }
        
        if(this.head.next == null){
            return this.head ;
        }
        
        while(temp !== null && temp.next !== null){
            
            
            
            temp = temp.next.next;
            pre = pre.next;
            
            
        }
        return pre
    }
    hasLoop(){
        let slow = this.head;
        let fast = this.head;
        
        if(this.head == null){
            return false
        }
        if(this.head.next == null){
            return false
        }
        
        while(fast !== null && fast.next !== null){
            fast = fast.next.next;
            slow = slow.next;
            
            if(fast == slow){
                return true;
            }
        }
        return false
    }
    removeDuplicates(){
	    let temp = this.head;
	    let pre = null;
	    let myset = new Set();
	    
	    while (temp != null){
	        if(myset.has(temp.value)){
	            pre.next = temp.next;
                this.length--;
	        }
	        else{
	            myset.add(temp.value);
	            pre = temp;
	        }
	        temp = temp.next
	        
	        
	        
	    }
	}
}

// create LinkedList :

let linkedlist1 = new Linkedlist(1);
linkedlist1.push(3);
linkedlist1.unshift(4);
linkedlist1.reverse();
console.log(linkedlist1);
