// কোন একটা  condition থেক্লে while loop ব্যবহার হবে। কোনো এক টা জিনিস কে বারবার চালাতে হইলে এটা ব্যবহার করা হই। 
// while loop লিখার শর্ত হইল while লিখার পর () এর মধ্যে শর্ত লিখতে হবে।

var num=0;
while (num<10){
    console.log(num);
    num++;
    if (num === 8) {
        break;
      }
}
