const CarSpecifications = (props) => {
    const { specification, car } = props;

    return (
      <table className="table table-borderless" width={'100%'}>
        {specification.map((item) => (
          <tr>
            <td className="text-bold" width="40%">
              {item}
            </td>
            <td className="text-uppercase">{car[item] ?? 'NA'}</td>
          </tr>
        ))}
      </table>
    );
 }

export default CarSpecifications;