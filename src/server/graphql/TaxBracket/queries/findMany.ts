import { queryField, nonNull, list } from 'nexus'

export const TaxBracketFindManyQuery = queryField('findManyTaxBracket', {
  type: nonNull(list(nonNull('TaxBracket'))),
  args: {
    where: 'TaxBracketWhereInput',
    orderBy: list('TaxBracketOrderByInput'),
    cursor: 'TaxBracketWhereUniqueInput',
    distinct: 'TaxBracketScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.taxBracket.findMany({
      ...args,
      ...select,
    })
  },
})
