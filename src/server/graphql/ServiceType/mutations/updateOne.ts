import { mutationField, nonNull } from 'nexus'

export const ServiceTypeUpdateOneMutation = mutationField(
  'updateOneServiceType',
  {
    type: nonNull('ServiceType'),
    args: {
      where: nonNull('ServiceTypeWhereUniqueInput'),
      data: nonNull('ServiceTypeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.serviceType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
