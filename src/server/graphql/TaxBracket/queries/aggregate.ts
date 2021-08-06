import { queryField, list } from 'nexus'

export const TaxBracketAggregateQuery = queryField('aggregateTaxBracket', {
  type: 'AggregateTaxBracket',
  args: {
    where: 'TaxBracketWhereInput',
    orderBy: list('TaxBracketOrderByInput'),
    cursor: 'TaxBracketWhereUniqueInput',
    distinct: 'TaxBracketScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.taxBracket.aggregate({ ...args, ...select }) as any
  },
})
