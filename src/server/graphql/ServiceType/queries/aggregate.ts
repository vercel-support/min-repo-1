import { queryField, list } from 'nexus'

export const ServiceTypeAggregateQuery = queryField('aggregateServiceType', {
  type: 'AggregateServiceType',
  args: {
    where: 'ServiceTypeWhereInput',
    orderBy: list('ServiceTypeOrderByInput'),
    cursor: 'ServiceTypeWhereUniqueInput',
    distinct: 'ServiceTypeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.serviceType.aggregate({ ...args, ...select }) as any
  },
})
