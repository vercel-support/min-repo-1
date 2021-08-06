import { mutationField, nonNull } from 'nexus'

export const ServiceTypeDeleteOneMutation = mutationField(
  'deleteOneServiceType',
  {
    type: 'ServiceType',
    args: {
      where: nonNull('ServiceTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.serviceType.delete({
        where,
        ...select,
      })
    },
  },
)
