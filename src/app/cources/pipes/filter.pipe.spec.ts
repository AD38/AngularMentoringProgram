import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();  
  });
  
  it('should filter list of cources', () => {
    let courceItems = [
      {
        id: 1,
        title: 'First Item',
        duration: 88,
        creationDate: new Date(2020, 9, 20),
        description: 'Item decription',
        isTopRated: false
      },
      {
        id: 2,
        title: 'Second Item',
        duration: 129,
        creationDate: new Date(2020, 12, 13),
        description: 'Item decription',
        isTopRated: false
      },
      {
        id: 3,
        title: 'Third Item',
        duration: 43,
        creationDate: new Date(2020, 4, 9),
        description: 'Item decription',
        isTopRated: true
      }
    ];
    const pipe = new FilterPipe();
    let result = pipe.transform(courceItems, "second")

    expect(result.length).toBe(1);
    expect(result[0].id).toBe(2)
  });
});
