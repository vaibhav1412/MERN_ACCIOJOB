
// remove duplicate

let array=[1,0,2,3,2,3,1,2,4,5,56,67]
console.log([...new Set(array)])


//for string
let string="aaabbsdsd"
console.log([...new Set(string)].join(""))  // shortcut technique

/// contest preparation using set map

function totalCount(arr,k)
{
    let prefixSum=0;
    let map=new Map()

    map.set(0,1)
    let count=0
    for (let num of arr)
    {
        prefixSum+=num;

        if (map.has(prefixSum-k))
        {
            count+=map.get(prefixSum-k)
        }

     map.set(prefixSum,(map.get(prefixSum) || 0)+1)
    }
    return count;
}
arr=[1, 4, 20, 3, 10, 5]
console.log(totalCount(arr,33))

function longestSubArray(arr,k)
{
    let map= new Map()
    let maxLength=0;
    let prefixSum=0
    // using prefixSum

    for (let i=0; i<arr.length; i++)
    {
        prefixSum+=arr[i];

        if (prefixSum==k) maxLength=i+1;
        if (!map.has(prefixSum))
        {
            map.set(prefixSum,i)
        };

        if (map.has(prefixSum-k))
        {
            maxLength= Math.max(maxLength, i-map.get(prefixSum-k))
        }
    }
    return maxLength
}
arr=[10, 5, 2, 7 ,1, 9]
console.log(longestSubArray(arr,15))

