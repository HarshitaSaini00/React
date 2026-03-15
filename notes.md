createRoot (function) -- ye ek apna dom create karta hai or jahan jahan changes hue hai wahan update karta hai 
javascript bhi apna dom banata hai lekin wo pura dom structure ko update karta hai isliye loading ka symbol aata hai

    REACT FIBER ARCHITECHTURE


virtual dom ko update karne wali fiber alogorithm hai
humne buttons, images add ki lekin koi bhi functionality nhi ho rahi kyun javascript inject nhi hui hai
it means humra web layout ban gaya hai and javascript inject hoti hai usse hum hydration bolte hai and hydration fiber ke thorugh achi hoti hai

reconciliation-- the algorithm react uses to diff one tre with another to determine which parts to be changed
reconciliation hi virtual dom hai jo javascript dom ke sath compare karti hai

fiber ke andar lists ki perfomance improve karni hai to keys humme use karni hogi kyunki keys stable ,predictable, and unique hoti hai

agar ek baar koi update aaya to thodi der wait karna better hoga or bulk me update bhejna actually fiber yahi karta hai