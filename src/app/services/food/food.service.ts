import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 8 },
      { name: 'GITHUB', count: 1 },
      { name: 'Security', count: 3 },
      { name: 'Apple Developpement', count: 1 },
      { name: 'Amazon', count: 1 },
      { name: 'Frontend', count: 1 },
      { name: 'Backend', count: 1 },
      { name: 'Linux', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Formation GitHub',
        cookTime: ' Welcome to our comprehensive Git and GitHub training session! Whether you are a beginner or looking to refresh your skills, this course is designed to equip you with the essential knowledge and practical skills to effectively use Git and GitHub for version control and collaboration.',
        price: 90,
        favorite: false,
        origins: ['SFAX'],
        stars: 5,
        imageUrl: '/assets/images/foods/images18.png',
        tags: ['GITHUB'],
        Time: '12/04'
      },
      {
        id: 2,
        name: 'Security Day',
        price: 100,
        cookTime: 'Join us for an insightful and engaging Security Day event, dedicated to exploring the latest trends, challenges, and solutions in cybersecurity. This one-day event brings together industry experts, thought leaders, and professionals from various fields to discuss critical issues and share best practices for securing digital environments',
        favorite: true,
        origins: ['Tunis'],
        stars: 4,
        imageUrl: '/assets/images/foods/images2.jpg',
        tags: ['Security'],
        Time: '06/12'
      },
      {
        id: 3,
        name: 'Formation Cyber Security',
        price: 150,
        cookTime: 'Our Security Training Program is designed to provide you with a comprehensive understanding of the principles, tools, and strategies used to secure digital infrastructures.',
        favorite: false,
        origins: ['Gabes'],
        stars: 3,
        imageUrl: '/assets/images/foods/images17.webp',
        tags: ['Security'],
        Time: '08/10'
      },
      {
        id: 4,
        name: 'Formation Swift',
        price: 200,
        cookTime: 'Our Swift Training Program is designed to help you master Apple is powerful programming language for iOS, macOS, watchOS, and tvOS development. Whether you are a beginner starting from scratch or an experienced developer looking to sharpen your skills, this course provides the essential knowledge and hands-on experience to build robust and efficient applications using Swift.',
        favorite: true,
        origins: ['Monastir','Sousse'],
        stars: 5,
        imageUrl: '/assets/images/foods/images13.jpg',
        tags: ['Apple Developpement'],
        Time: '31/06'
      },
      {
        id: 5,
        name: 'AWS Cloud Event (Tunisia)',
        price: 20,
        cookTime: 'Join us for an exciting AWS Cloud Event where you will explore the latest innovations, best practices, and real-world use cases of Amazon Web Services (AWS).',
        favorite: false,
        origins: ['Tunis','Sfax'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/images5.jpg',
        tags: ['Amazon'],
        Time: '25/09'
      },
      {
        id: 6,
        name: 'Formation (HTML+CSS)',
        price: 50,
        cookTime: 'Our HTML and CSS Training Program is designed to provide a solid foundation in web development, focusing on the building blocks of modern web design and development.',
        favorite: false,
        origins: ['Sfax'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/images12.jpg',
        tags: ['Frontend'],
        Time: '29/07'
      },
      {
        id: 7,
        name: 'Formation Node.js',
        price: 80,
        cookTime: 'Our Node.js Training Program is designed to introduce you to server-side JavaScript development using Node.js. This course will guide you through the basics and advanced features of Node.js, allowing you to build scalable, high-performance backend applications and APIs.',
        favorite: false,
        origins: ['Gabes'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/images14.png',
        tags: ['Backend'],
        Time: '15/11'
      },
      {
        id: 8,
        name: 'Formation LINUX',
        price: 120,
        cookTime: 'Our Linux Training Program is designed to help you master the Linux operating system, providing essential knowledge and practical skills for using and administering Linux servers. Whether you are new to Linux or looking to enhance your system administration skills, this course will empower you to manage Linux environments efficiently and confidently.',
        favorite: false,
        origins: ['Tunis'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/images16.jpg',
        tags: ['Security', 'Linux'],
        Time: '27/01'
      }
    ];
  }
}
