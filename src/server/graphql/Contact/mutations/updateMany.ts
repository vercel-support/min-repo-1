import { mutationField, nonNull } from 'nexus'

export const ContactUpdateManyMutation = mutationField('updateManyContact', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ContactWhereInput',
    data: nonNull('ContactUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.contact.updateMany(args as any)
  },
})
