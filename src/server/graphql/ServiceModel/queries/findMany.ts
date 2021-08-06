import { queryField, nonNull, list } from 'nexus'

export const ServiceModelFindManyQuery = queryField('findManyServiceModel', {
  type: nonNull(list(nonNull('ServiceModel'))),
  args: {
    where: 'ServiceModelWhereInput',
    orderBy: list('ServiceModelOrderByInput'),
    cursor: 'ServiceModelWhereUniqueInput',
    distinct: 'ServiceModelScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.serviceModel.findMany({
      ...args,
      ...select,
    })
  },
})
