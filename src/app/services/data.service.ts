import { Injectable } from '@angular/core';
import { Blogs } from '../components/blogs/blogs';
import { Product } from '../components/shopping/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  blogs: Blogs[] = [
    {
      id: 1,
      title: 'You How All This Mistaken Idea Of Denouncing Pleasure And Praising Pain Was Born.',
      description1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
      description2: 'Nulla quam turpis, commodo et placerat eu, mollis ut odio. Donec pellentesque egestas consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc at urna dolor. Mauris odio nisi, rhoncus ac justo eget, lacinia iaculis lectus. Pellentesque id dapibus justo. Nunc venenatis non odio sed luctus. Etiam sit amet elit massa. Phasellus quis lorem eros. Aliquam non tincidunt nibh. Nulla quis interdum neque. Mauris volutpat neque eu nunc ornare ullamcorper. Sed neque velit, lobortis eget tellus in, pellentesque ornare nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas rutrum nisi non nibh egestas lacinia. Cras ut tellus sit amet lacus consequat dictum nec id sapien. Ut pellentesque ac ex ut elementum. Morbi mollis volutpat neque eu volutpat. Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex. Maecenas luctus orci sed blandit fermentum. In vulputate eu metus a faucibus. Suspendisse feugiat condimentum congue.',
      image1: '../../../assets/img/blogs/1.jpg',
      image2: '../../../assets/img/blogs/2.jpg',
      date: '25 FEBRUARY 2023',
      postedBy: 'Admin',
      likes: 5,
      comments: 10
    },
    {
      id: 2,
      title: 'Lorem Title Ipsum.',
      description1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
      description2: 'Nulla quam turpis, commodo et placerat eu, mollis ut odio. Donec pellentesque egestas consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc at urna dolor. Mauris odio nisi, rhoncus ac justo eget, lacinia iaculis lectus. Pellentesque id dapibus justo. Nunc venenatis non odio sed luctus. Etiam sit amet elit massa. Phasellus quis lorem eros. Aliquam non tincidunt nibh. Nulla quis interdum neque. Mauris volutpat neque eu nunc ornare ullamcorper. Sed neque velit, lobortis eget tellus in, pellentesque ornare nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas rutrum nisi non nibh egestas lacinia. Cras ut tellus sit amet lacus consequat dictum nec id sapien. Ut pellentesque ac ex ut elementum. Morbi mollis volutpat neque eu volutpat. Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex. Maecenas luctus orci sed blandit fermentum. In vulputate eu metus a faucibus. Suspendisse feugiat condimentum congue.',
      image1: '../../../assets/img/blogs/2.jpg',
      image2: '../../../assets/img/blogs/3.jpg',
      date: '25 FEBRUARY 2023',
      postedBy: 'Admin',
      likes: 5,
      comments: 10
    },
    {
      id: 3,
      title: 'You How All This Mistaken Idea Of Denouncing Pleasure And Praising Pain Was Born.',
      description1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
      description2: 'Nulla quam turpis, commodo et placerat eu, mollis ut odio. Donec pellentesque egestas consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc at urna dolor. Mauris odio nisi, rhoncus ac justo eget, lacinia iaculis lectus. Pellentesque id dapibus justo. Nunc venenatis non odio sed luctus. Etiam sit amet elit massa. Phasellus quis lorem eros. Aliquam non tincidunt nibh. Nulla quis interdum neque. Mauris volutpat neque eu nunc ornare ullamcorper. Sed neque velit, lobortis eget tellus in, pellentesque ornare nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas rutrum nisi non nibh egestas lacinia. Cras ut tellus sit amet lacus consequat dictum nec id sapien. Ut pellentesque ac ex ut elementum. Morbi mollis volutpat neque eu volutpat. Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex. Maecenas luctus orci sed blandit fermentum. In vulputate eu metus a faucibus. Suspendisse feugiat condimentum congue.',
      image1: '../../../assets/img/blogs/3.jpg',
      image2: '../../../assets/img/blogs/4.jpg',
      date: '25 FEBRUARY 2023',
      postedBy: 'Admin',
      likes: 5,
      comments: 10
    },
    {
      id: 4,
      title: 'You How All This Mistaken Idea Of Denouncing Pleasure And Praising Pain Was Born.',
      description1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
      description2: 'Nulla quam turpis, commodo et placerat eu, mollis ut odio. Donec pellentesque egestas consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc at urna dolor. Mauris odio nisi, rhoncus ac justo eget, lacinia iaculis lectus. Pellentesque id dapibus justo. Nunc venenatis non odio sed luctus. Etiam sit amet elit massa. Phasellus quis lorem eros. Aliquam non tincidunt nibh. Nulla quis interdum neque. Mauris volutpat neque eu nunc ornare ullamcorper. Sed neque velit, lobortis eget tellus in, pellentesque ornare nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas rutrum nisi non nibh egestas lacinia. Cras ut tellus sit amet lacus consequat dictum nec id sapien. Ut pellentesque ac ex ut elementum. Morbi mollis volutpat neque eu volutpat. Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex. Maecenas luctus orci sed blandit fermentum. In vulputate eu metus a faucibus. Suspendisse feugiat condimentum congue.',
      image1: '../../../assets/img/blogs/4.jpg',
      image2: '../../../assets/img/blogs/5.jpg',
      date: '25 FEBRUARY 2023',
      postedBy: 'Admin',
      likes: 5,
      comments: 10
    },
    {
      id: 5,
      title: 'You How All This Mistaken Idea Of Denouncing Pleasure And Praising Pain Was Born.',
      description1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
      description2: 'Nulla quam turpis, commodo et placerat eu, mollis ut odio. Donec pellentesque egestas consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc at urna dolor. Mauris odio nisi, rhoncus ac justo eget, lacinia iaculis lectus. Pellentesque id dapibus justo. Nunc venenatis non odio sed luctus. Etiam sit amet elit massa. Phasellus quis lorem eros. Aliquam non tincidunt nibh. Nulla quis interdum neque. Mauris volutpat neque eu nunc ornare ullamcorper. Sed neque velit, lobortis eget tellus in, pellentesque ornare nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas rutrum nisi non nibh egestas lacinia. Cras ut tellus sit amet lacus consequat dictum nec id sapien. Ut pellentesque ac ex ut elementum. Morbi mollis volutpat neque eu volutpat. Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex. Maecenas luctus orci sed blandit fermentum. In vulputate eu metus a faucibus. Suspendisse feugiat condimentum congue.',
      image1: '../../../assets/img/blogs/5.jpg',
      image2: '../../../assets/img/blogs/2.jpg',
      date: '25 FEBRUARY 2023',
      postedBy: 'Admin',
      likes: 5,
      comments: 10
    },
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'bag1',
      images: [
        '../../../assets/img/shopping_products/bags/images.jfif',
        '../../../assets/img/shopping_products/bags/images (1).jfif',
        '../../../assets/img/shopping_products/bags/images (2).jfif',
        '../../../assets/img/shopping_products/bags/images (3).jfif',
        '../../../assets/img/shopping_products/bags/images (4).jfif',
        '../../../assets/img/shopping_products/bags/images (5).jfif',
        '../../../assets/img/shopping_products/bags/images (6).jfif',
        '../../../assets/img/shopping_products/bags/images (7).jfif',
      ],
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price: 150,
      oldPrice: 200,
      offer: '25% off',
      // colors: 'string',
      quantity: 0,
      video: 'https://www.youtube.com/watch?v=ey_L_VzPwEI',
      category: 'bags'
    },
    {
      id: 2,
      name: 'bag2',
      images: [
        '../../../assets/img/shopping_products/bags/images (1).jfif',
        '../../../assets/img/shopping_products/bags/images.jfif',
        '../../../assets/img/shopping_products/bags/images (2).jfif',
        '../../../assets/img/shopping_products/bags/images (3).jfif',
        '../../../assets/img/shopping_products/bags/images (4).jfif',
        '../../../assets/img/shopping_products/bags/images (5).jfif',
        '../../../assets/img/shopping_products/bags/images (6).jfif',
        '../../../assets/img/shopping_products/bags/images (7).jfif',
      ],
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price: 100,
      oldPrice: 200,
      offer: '25% off',
      // colors: 'string',
      quantity: 5,
      video: 'https://www.youtube.com/watch?v=ey_L_VzPwEI',
      category: 'bags'
    },
    {
      id: 3,
      name: 'bag3',
      images: [
        '../../../assets/img/shopping_products/bags/images (2).jfif',
        '../../../assets/img/shopping_products/bags/images (1).jfif',
        '../../../assets/img/shopping_products/bags/images.jfif',
        '../../../assets/img/shopping_products/bags/images (3).jfif',
        '../../../assets/img/shopping_products/bags/images (4).jfif',
        '../../../assets/img/shopping_products/bags/images (5).jfif',
        '../../../assets/img/shopping_products/bags/images (6).jfif',
        '../../../assets/img/shopping_products/bags/images (7).jfif',
      ],
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price: 250,
      oldPrice: 200,
      offer: '25% off',
      // colors: 'string',
      quantity: 15,
      video: 'https://www.youtube.com/watch?v=ey_L_VzPwEI',
      category: 'bags'
    },
    {
      id: 4,
      name: 'bag4',
      images: [
        '../../../assets/img/shopping_products/bags/images (3).jfif',
        '../../../assets/img/shopping_products/bags/images (2).jfif',
        '../../../assets/img/shopping_products/bags/images (1).jfif',
        '../../../assets/img/shopping_products/bags/images.jfif',
        '../../../assets/img/shopping_products/bags/images (4).jfif',
        '../../../assets/img/shopping_products/bags/images (5).jfif',
        '../../../assets/img/shopping_products/bags/images (6).jfif',
        '../../../assets/img/shopping_products/bags/images (7).jfif',
      ],
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price: 50,
      oldPrice: 200,
      offer: '25% off',
      // colors: 'string',
      quantity: 25,
      video: 'https://www.youtube.com/watch?v=ey_L_VzPwEI',
      category: 'bags'
    },
    {
      id: 5,
      name: 'Trim Dress',
      images: ['../../../assets/img/products/2.jpg'],
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price: 350,
      oldPrice: 500,
      offer: '50% off',
      quantity: 50,
      category: 'clothes'
    },
    {
      id: 6,
      name: 'Trim Dress',
      images: ['../../../assets/img/products/2.jpg'],
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price: 250,
      oldPrice: 500,
      offer: '50% off',
      quantity: 3,
      category: 'clothes'
    },
    {
      id: 7,
      name: 'Trim Dress',
      images: ['../../../assets/img/products/2.jpg'],
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price: 450,
      oldPrice: 500,
      offer: '50% off',
      quantity: 0,
      category: 'clothes'
    },
    {
      id: 8,
      name: 'Trim Dress',
      images: ['../../../assets/img/products/2.jpg'],
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price: 500,
      // oldPrice: 500,
      offer: '50% off',
      quantity: 10,
      category: 'clothes'
    },
    {
      id: 9,
      name: 'Trim Dress',
      images: ['../../../assets/img/products/2.jpg'],
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price: 150,
      oldPrice: 500,
      offer: '50% off',
      quantity: 30,
      category: 'clothes'
    },
    {
      id: 10,
      name: 'Trim Dress',
      images: ['../../../assets/img/products/2.jpg'],
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price: 50,
      oldPrice: 500,
      offer: '50% off',
      quantity: 7,
      category: 'clothes'
    },
  ];

  wishList: any = [];
  transformWishList: any = [];
  compareList: any = [];
  transformCompareList: any = [];
  cartList: any = [];
  transformCartList: any = [];
  cartQuantity: number = 0;
  productQuantity!: any;
  totalPrice: number = 0;
  transactionID: number = 0;

  constructor() {
    if (localStorage.getItem('wishlist') !== undefined || localStorage.getItem('wishlist') !== null) {
      this.transformWishList = localStorage.getItem('wishlist') === null ? '[]' : localStorage.getItem('wishlist');
      this.wishList = JSON.parse(this.transformWishList);
    }

    if (localStorage.getItem('comparelist') !== undefined || localStorage.getItem('comparelist') !== null) {
      this.transformCompareList = localStorage.getItem('comparelist') === null ? '[]' : localStorage.getItem('comparelist');
      this.compareList = JSON.parse(this.transformCompareList);
    }

    if (localStorage.getItem('cartlist') !== undefined || localStorage.getItem('cartlist') !== null) {
      this.transformCartList = localStorage.getItem('cartlist') === null ? '[]' : localStorage.getItem('cartlist');
      this.cartList = JSON.parse(this.transformCartList);
      this.cartQuantity = this.cartList.length;
    }

  }

}