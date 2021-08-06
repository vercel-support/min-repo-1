import { mutationField, nonNull } from 'nexus'

export const ServiceModelDeleteManyMutation = mutationField(
  'deleteManyServiceModel',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ServiceModelWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.serviceModel.deleteMany({ where } as any)
    },
  },
)
