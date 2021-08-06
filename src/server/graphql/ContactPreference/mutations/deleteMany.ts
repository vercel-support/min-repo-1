import { mutationField, nonNull } from 'nexus'

export const ContactPreferenceDeleteManyMutation = mutationField(
  'deleteManyContactPreference',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ContactPreferenceWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.contactPreference.deleteMany({ where } as any)
    },
  },
)
