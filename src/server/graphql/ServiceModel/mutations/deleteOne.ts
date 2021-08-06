import { mutationField, nonNull } from 'nexus'

export const ServiceModelDeleteOneMutation = mutationField(
  'deleteOneServiceModel',
  {
    type: 'ServiceModel',
    args: {
      where: nonNull('ServiceModelWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.serviceModel.delete({
        where,
        ...select,
      })
    },
  },
)
