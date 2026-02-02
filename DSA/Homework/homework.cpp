/*
SQUARE PATTERN
 n=4
    ****
    ****
    ****
    ****
*/

// #include<iostream>
// using namespace std;

// int main(){

//     int n;
//     cout<<"Enter the value of n: ";
//     cin>>n;

//     for(int i=0; i<n; i++){
//         for(int j=0; j<n ; j++){
//             cout<<"*"<<" ";
//         }
//         cout<<endl;
//     }
//     return 0;
// }


/*
SQUARE PATTERN WITH INCREASING NUMBERS
n = 4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
*/

// #include<iostream>
// using namespace std;

// int main(){
//     int n;
//     cout<<"Enter the value of n: ";
//     cin>>n;

//     int num = 1;
//     for(int i=0; i<n; i++){
//         for(int j=0; j<n; j++){
//             cout<<num<<" ";
//             num++;
//         }
//         cout<<endl;
//     }

//     return 0;
// }

/*
SQUARE PATTERN WITH INCREASING CHARACTERs
n = 4
A B C D
E F G H
I J K L
M N O P
*/

// #include<iostream>
// using namespace std;

// int main(){

//     int n;
//     cout<<"Enter the value of n: ";
//     cin>>n;

//     char ch = 'A';
//     for(int i=0; i<n; i++){
//         for(int j=0; j<n; j++){
//             cout<<ch<<" ";
//             ch++;
//         }
//         cout<<endl;
//     }
    
//     return 0;
// }

/*
TRIANGLE PATTERN
n=4
*
**
***
****
*/

// #include<iostream>
// using namespace std;

// int main(){

//     int n;
//     cout<<"Enter the value of n: ";
//     cin>>n;
//     for(int i=0; i<n; i++){
//         for(int j=0; j<=i; j++){
//             cout<<"*"<<" ";
//         }
//         cout<<endl;
//     }
//     return 0;
// }

/*
TRIANGLE PATTERN WITH INCREASING NUMBERS
n=4
A
B B
C C C
D D D D
*/

// #include<iostream>
// using namespace std;

// int main(){

//     int n;
//     cout<<"Enter the value of n: ";
//     cin>>n;

//     char ch = 'A';
//     for(int i=0; i<n; i++){
//         for(int j=0; j<=i; j++){
//             cout<<ch<<" ";
//         }
//         ch++;
//         cout<<endl;
//     }
//     return 0;
// }

/*
TRIANGLE PATTERN WITH INCREASING NUMBERS
n=4
1
1 2
1 2 3
1 2 3 4
*/

// #include<iostream>
// using namespace std;

// int main(){

//     int n;
//     cout<<"Enter the value of n: ";
//     cin>>n;

//     for(int i=0; i<n ;i++){
//         int num = 1;
//         for(int j=0; j<=i; j++){
//             cout<<num<<" ";
//             num++;
//         }
//         cout<<endl;
//     }
//     return 0;
// }

/*
REVERSE TRIANGLE PATTERN
n=4
1
2 1
3 2 1
4 3 2 1
*/

// #include<iostream>
// using namespace std;

// int main(){

//     int n;
//     cout<<"Enter the value of n: ";
//     cin>>n;

//     for(int i=0; i<n; i++){
//         for(int j=i+1; j>0; j--){
//             cout<<j<<" ";
//         }
//         cout<<endl;
//     }
//     return 0;
// }

/*
FLOYD's TRIANGLE PATTERN
n=4
1
2 3
4 5 6
7 8 9 10
*/

// #include<iostream>
// using namespace std;

// int main(){

//     int n;
//     cout<<"Enter the value of n: ";
//     cin>>n;

//     int num = 1;
//     for(int i=0; i<n; i++){
//         for(int j=0; j<=i; j++){
//             cout<<num<<" ";
//             num++;
//         }
//         cout<<endl;
//     }
//     return 0;
// }

/*
INVERTED TRIANGLE PATTERN
n=4
1111
 222
  33
   4  
*/

// #include<iostream>
// using namespace std;

// int main(){

//     int n;
//     cout<<"Enter the value of n: ";
//     cin>>n;

//     int num = 1;
//     for(int i=0; i<n; i++){

//         // Spaces
//         for(int j=0; j<=i; j++){
//             cout<<" ";
//         }

//         // numbers
//         for(int k=n; k>i; k--){
//             cout<<num;
//         }
//         num++;
//         cout<<endl;
//     }
//     return 0;
// }