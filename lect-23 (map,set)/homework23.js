
function BinarySearch(arr,n,target)
{
    let right=n-1, left=0;
    
    while(left<=right )
    {
        let mid=Math.floor((left+right)/2)
        
        if (arr[mid]=== target) return mid
        else if (arr[mid]<target) left=mid+1
        else right=mid-1;
    }
}