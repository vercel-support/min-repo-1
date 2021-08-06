import { queryField, list } from 'nexus'

export const ServiceModelAggregateQuery = queryField('aggregateServiceModel', {
  type: 'AggregateServiceModel',
  args: {
    where: 'ServiceModelWhereInput',
    orderBy: list('ServiceModelOrderByInput'),
    cursor: 'ServiceModelWhereUniqueInput',
    distinct: 'ServiceModelScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.serviceModel.aggregate({ ...args, ...select }) as any
  },
})
