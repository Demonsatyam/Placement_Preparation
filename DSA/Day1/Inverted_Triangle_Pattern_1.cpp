/*
INVERTED TRIANGLE PATTERN 1
    n=4
    1 1 1 1
      2 2 2
        3 3
          4
*/

#include<iostream>
using namespace std;

int main(){

    int n;
    cout<<"Enter the value of n: ";
    cin>>n;

    for(int i=1; i<=n; i++){
        // Print spaces
        for(int j=1; j<i; j++){
            cout<<"  ";
        }
        // Print numbers
        for(int k=i; k<=n; k++){
            cout<<i<<" ";
        }
        cout<<endl;
    }

    return 0;
}