#include <stdio.h>

void findSmallestNumbers(int arr[], int size, int* min1, int* min2) {
    *min1 = arr[0];
    *min2 = arr[1];
    
    if (*min1 > *min2) {
        int temp = *min1;
        *min1 = *min2;
        *min2 = temp;
    }
    
    for (int i = 2; i < size; i++) {
        if (arr[i] < *min1) {
            *min2 = *min1;
            *min1 = arr[i];
        } else if (arr[i] < *min2 && arr[i] != *min1) {
            *min2 = arr[i];
        }
    }
}

int main() {
    int arr[100];
    int size, min1, min2;
    
    printf("Nhập số phần tử của mảng: ");
    scanf("%d", &size);
    
    printf("Nhập các phần tử của mảng:\n");
    for (int i = 0; i < size; i++) {
        printf("arr[%d] = ", i);
        scanf("%d", &arr[i]);
    }
    
    findSmallestNumbers(arr, size, &min1, &min2);
    
    printf("Số nhỏ nhất trong mảng: %d\n", min1);
    printf("Số nhỏ thứ hai trong mảng: %d\n", min2);
    
    return 0;
}