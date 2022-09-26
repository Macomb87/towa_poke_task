import {searchFilter} from "@/helpers/search";

describe('SearchFilter', () => {
    const mock = [
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
    it('It find kevin Shepherd', () => {
        const search = searchFilter(mock, 'Kevin');
        expect(search).toEqual([{
            "name": "Kevin Shepherd",
            "guid": "198E6514-4A68-9D7D-332C-B6E81C87558E"
        }])
    })
    it('It should find names that includes `ma` letters', () => {
        const search = searchFilter(mock, 'ma');
        expect(search).toEqual([{
            "name": "Rooney Thomas",
            "guid": "B933595E-CE17-6457-CF73-48166DB72E52"
        },])
    })

    it('It should find names that includes `a` letter', () => {
        const search = searchFilter(mock, 'a');
        expect(search).toEqual([{
            "name": "Alden Watts",
            "guid": "2B1E380F-4BF2-1291-AAA6-F5E755AA7B4B"
        }, {
            "name": "Abra Gonzalez",
            "guid": "EA92A248-8598-9A15-666C-B1A3535AA644"
        },
            {
                "name": "Rooney Thomas",
                "guid": "B933595E-CE17-6457-CF73-48166DB72E52"
            }])
    })

})
