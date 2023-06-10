int arr[100];
    int size;
    
    printf("Nhập số phần tử của mảng: ");
    scanf("%d", &size);
    
    printf("Nhập các phần tử của mảng:\n");
    for (int i = 0; i < size; i++) {
        printf("arr[%d] = ", i);
        scanf("%d", &arr[i]);
    }
    
    int max1 = arr[0];
    int max2 = arr[0];
    int positonMax1 = 0;
    
    for (int i = 1; i < size; i++) {
        if (arr[i] > max1) {
            max2 = max1; // giá trị của max2 sẽ được gán cho max1 (vì số lớn nhất sẽ thành só lớn thứ 2)
            max1 = arr[i];  // giá trị của max1 sẽ được gán cho a[i] 
            positonMax1 = i; // lưu vị trí của max
        } else if (arr[i] > max2 && arr[i] < max1) {
            max2 = arr[i];
        }
    }
    
    printf("Số lớn nhất trong mảng: %d\n", max1);
    printf("Số lớn thứ hai trong mảng: %d\n", max2);
    printf("Vị trí: %d", positonMax1);