import {paginate} from "@/helpers/paginate";

describe('Paginate', () => {
  const mock=[
    {
      "name": "Alden Watts",
      "guid": "2B1E380F-4BF2-1291-AAA6-F5E755AA7B4B"
    },
    {
      "name": "Abra Gonzalez",
      "guid": "EA92A248-8598-9A15-666C-B1A3535AA644"
    },
    {
      "name": "Rooney Thomas",
      "guid": "B933595E-CE17-6457-CF73-48166DB72E52"
    },
    {
      "name": "Noelle Rios",
      "guid": "E6B94686-A324-A472-3FF6-B13DBA483CAC"
    },
    {
      "name": "Kevin Shepherd",
      "guid": "198E6514-4A68-9D7D-332C-B6E81C87558E"
    }
  ];
  it('It should creat 1 pokemon per site', () => {
      const page1  = paginate(mock,1,1);
      expect(page1).toEqual([mock[0]])
  })


  it('It should create result 3 pokemon per site', () => {
    const page1  = paginate(mock,3,1);
    expect(page1).toEqual([{
      "name": "Alden Watts",
      "guid": "2B1E380F-4BF2-1291-AAA6-F5E755AA7B4B"
    },
      {
        "name": "Abra Gonzalez",
        "guid": "EA92A248-8598-9A15-666C-B1A3535AA644"
      },
      {
        "name": "Rooney Thomas",
        "guid": "B933595E-CE17-6457-CF73-48166DB72E52"
      },])
  })
})
