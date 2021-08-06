import { queryField, nonNull } from 'nexus'

export const ServiceModelFindUniqueQuery = queryField(
  'findUniqueServiceModel',
  {
    type: 'ServiceModel',
    args: {
      where: nonNull('ServiceModelWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.serviceModel.findUnique({
        where,
        ...select,
      })
    },
  },
)
