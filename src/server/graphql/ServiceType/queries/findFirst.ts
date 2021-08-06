import { queryField, list } from 'nexus'

export const ServiceTypeFindFirstQuery = queryField('findFirstServiceType', {
  type: 'ServiceType',
  args: {
    where: 'ServiceTypeWhereInput',
    orderBy: list('ServiceTypeOrderByInput'),
    cursor: 'ServiceTypeWhereUniqueInput',
    distinct: 'ServiceTypeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.serviceType.findFirst({
      ...args,
      ...select,
    })
  },
})
