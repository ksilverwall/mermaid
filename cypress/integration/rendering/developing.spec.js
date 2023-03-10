import { imgSnapshotTest } from '../../helpers/util';
describe('Class diagram V2', () => {
  it('should add classes namespaces', function () {
    // imgSnapshotTest(
    //   `
    //   classDiagram
    //   namespace Namespace1 {
    //     class Class1 {
    //       int : test
    //       string : foo
    //       test()
    //       foo()
    //     }
    //   }
    //   `
    // );
    imgSnapshotTest(
      `
      classDiagram
      namespace Namespace1 {
        class C1
        class C2
      }
      class C3
      class C4
      `
    );
    // imgSnapshotTest(
    //   `
    //   classDiagram
    //   namespace Namespace1 {
    //     class Class1 {
    //       int : test
    //       string : foo
    //       test()
    //       foo()
    //     }
    //   }
    //   `
    // );
  });
});
