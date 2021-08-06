import { queryField, nonNull, list } from 'nexus'

export const TaxStatusFindCountQuery = queryField('findManyTaxStatusCount', {
  type: nonNull('Int'),
  args: {
    where: 'TaxStatusWhereInput',
    orderBy: list('TaxStatusOrderByInput'),
    cursor: 'TaxStatusWhereUniqueInput',
    distinct: 'TaxStatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.taxStatus.count(args as any)
  },
})
