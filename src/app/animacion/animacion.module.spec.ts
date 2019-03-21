import { AnimacionModule } from './animacion.module';

describe('AnimacionModule', () => {
  let animacionModule: AnimacionModule;

  beforeEach(() => {
    animacionModule = new AnimacionModule();
  });

  it('should create an instance', () => {
    expect(animacionModule).toBeTruthy();
  });
});
