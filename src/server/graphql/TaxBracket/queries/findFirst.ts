import { queryField, list } from 'nexus'

export const TaxBracketFindFirstQuery = queryField('findFirstTaxBracket', {
  type: 'TaxBracket',
  args: {
    where: 'TaxBracketWhereInput',
    orderBy: list('TaxBracketOrderByInput'),
    cursor: 'TaxBracketWhereUniqueInput',
    distinct: 'TaxBracketScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.taxBracket.findFirst({
      ...args,
      ...select,
    })
  },
})
