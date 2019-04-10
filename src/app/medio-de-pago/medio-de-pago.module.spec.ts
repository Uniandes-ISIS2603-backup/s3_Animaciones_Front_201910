import { MedioDePagoModule } from './medio-de-pago.module';

describe('MedioDePagoModule', () => {
  let medioDePagoModule: MedioDePagoModule;

  beforeEach(() => {
    medioDePagoModule = new MedioDePagoModule();
  });

  it('should create an instance', () => {
    expect(medioDePagoModule).toBeTruthy();
  });
});
