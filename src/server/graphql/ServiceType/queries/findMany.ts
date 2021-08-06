import { queryField, nonNull, list } from 'nexus'

export const ServiceTypeFindManyQuery = queryField('findManyServiceType', {
  type: nonNull(list(nonNull('ServiceType'))),
  args: {
    where: 'ServiceTypeWhereInput',
    orderBy: list('ServiceTypeOrderByInput'),
    cursor: 'ServiceTypeWhereUniqueInput',
    distinct: 'ServiceTypeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.serviceType.findMany({
      ...args,
      ...select,
    })
  },
})
