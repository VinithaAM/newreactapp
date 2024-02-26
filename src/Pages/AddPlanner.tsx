
import Container from '@mui/material/Container';
interface componentNameProps {}

const AddPlanner = (props: componentNameProps) => {
  return (
    <Container maxWidth="sm">
    <div className="container">
      <section>
        <form>
          <div className="row">
            <div className="col-75">
              <span>Name</span>
              </div>
              <div className="col-75">
              <input type="text" maxLength={20}></input>
            </div>
          </div>
          <div>
            <span>Scheduling Lead time</span>
            <input type="number" placeholder="mintues" maxLength={10}></input>
          </div>
          <div>
            <span>Attendant Seats</span>
            <input type="password" maxLength={10}></input>
          </div>
          <div>
            <span>Stretchers</span>
            <input type="password" maxLength={10}></input>
          </div>
          <div>
            <span>Acuity</span>
            <input type="password" maxLength={10}></input>
          </div>
          <div>
            <span>MultiLoad Allowed?</span>
            <input type="password" maxLength={10}></input>
          </div>
          <div>
            <span>Serviced By</span>
            <input type="password" maxLength={10}></input>
          </div>
          <div>
            <span>Parallel Pickups/Dropoffs</span>
            <input type="password" maxLength={10}></input>
          </div>
        </form>
      </section>
    </div>
    </Container>
  );
};

export default AddPlanner;
