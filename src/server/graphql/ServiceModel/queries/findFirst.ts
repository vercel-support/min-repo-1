import { queryField, list } from 'nexus'

export const ServiceModelFindFirstQuery = queryField('findFirstServiceModel', {
  type: 'ServiceModel',
  args: {
    where: 'ServiceModelWhereInput',
    orderBy: list('ServiceModelOrderByInput'),
    cursor: 'ServiceModelWhereUniqueInput',
    distinct: 'ServiceModelScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.serviceModel.findFirst({
      ...args,
      ...select,
    })
  },
})
