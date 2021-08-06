import { queryField, nonNull, list } from 'nexus'

export const TaxBracketFindCountQuery = queryField('findManyTaxBracketCount', {
  type: nonNull('Int'),
  args: {
    where: 'TaxBracketWhereInput',
    orderBy: list('TaxBracketOrderByInput'),
    cursor: 'TaxBracketWhereUniqueInput',
    distinct: 'TaxBracketScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.taxBracket.count(args as any)
  },
})
