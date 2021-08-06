import { queryField, nonNull } from 'nexus'

export const ServiceTypeFindUniqueQuery = queryField('findUniqueServiceType', {
  type: 'ServiceType',
  args: {
    where: nonNull('ServiceTypeWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.serviceType.findUnique({
      where,
      ...select,
    })
  },
})
