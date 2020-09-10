let arr = [
    {
        name : "Robert",
        age : 2,
        country : "USA",
        hobbies : ["swimming", "reading"]
    },

    {
        name : "Chris Hemsworth",
        age : 51,
        country : "Asgard",
        hobbies : ["eating", "reading"]
    },

    {
        name : "Chris Evans",
        age : 50,
        country : "India",
        hobbies : ["playing", "dating"]
    }
];

//console.log(arr);

function age_30()
{
    for (let i=0; i<arr.length;i++)
    {
        if (arr[i].age < 30)
        {
            console.log(arr[i]);
        }
    }
}

function india()
{
    for (let i=0; i<arr.length;i++)
    {
        if (arr[i].country === "India")
        {
            console.log(arr[i]);
        }
    }
}

age_30();

india();