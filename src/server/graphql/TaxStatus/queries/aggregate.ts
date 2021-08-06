import { queryField, list } from 'nexus'

export const TaxStatusAggregateQuery = queryField('aggregateTaxStatus', {
  type: 'AggregateTaxStatus',
  args: {
    where: 'TaxStatusWhereInput',
    orderBy: list('TaxStatusOrderByInput'),
    cursor: 'TaxStatusWhereUniqueInput',
    distinct: 'TaxStatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.taxStatus.aggregate({ ...args, ...select }) as any
  },
})
