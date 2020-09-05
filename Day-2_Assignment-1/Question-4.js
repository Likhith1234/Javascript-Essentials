// Program to display only elements containing "a" in them from a array

let arr = ["hi", "hello", "world", "javascript", "laptop", "pen"];
arr.forEach(function (item) 
{
    for (let i=0;i<item.length;i++)
    {
        if ("a" == item[i])
        {
            console.log(item);
            break;
        }
    }
});