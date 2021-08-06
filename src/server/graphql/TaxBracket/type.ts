import { objectType } from 'nexus'

export const TaxBracket = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'TaxBracket',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('ContactTaxBracket', {
      type: 'Contact',
      args: {
        where: 'ContactWhereInput',
        orderBy: 'ContactOrderByInput',
        cursor: 'ContactWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ContactScalarFieldEnum',
      },
      resolve(root: any) {
        return root.ContactTaxBracket
      },
    })
    t.list.field('AccountTaxBracket', {
      type: 'Account',
      args: {
        where: 'AccountWhereInput',
        orderBy: 'AccountOrderByInput',
        cursor: 'AccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.AccountTaxBracket
      },
    })
    t.nullable.field('_count', {
      type: 'TaxBracketCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
